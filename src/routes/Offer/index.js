import React from 'react';
import { Link } from 'react-router-dom';

import Request from './Request';

import {
  Button, Page, Input, Successful, Loading
} from '../../components';

import * as Helpers from '../../helpers';

import bambooLogo from '../../assets/images/bamboo.svg';
import ssl from '../../assets/images/ssl.svg';

class Offer extends React.Component {
  state = {
    query: '',
  };

  secure = (
    <>
      <img src={ssl} alt="SSL" />
      {' '}
      Your information is encrypted and securely transmitted using SSL.
    </>
  );

  constructor() {
    super();
    const { location } = window;
    const params = location.search.split('?')[1];
    const introParam = params && params.split('=');
    const intro = introParam && introParam[0] === 'intro' && introParam[1] === 'true';

    this.state = {
      complete: false,
      data: {
        amount: 0,
        legal: '',
        password: '',
        passwordConfirmation: '',
      },
      // --TODO: THERE ARE CERTAINLY BETTER WAYS TO HANDLE THIS!--
      /* ONBOARDING STEPS */
      // TO RE-ORDER THE ONBOARDING STEPS SIMPLY
      // CHANGE THE ORDER IN THE `steps.all` ARRAY
      // THEN ENSURE THE LAST STEP CALLS `this.lastStep`
      // ANY STEP THAT HAS A SPECIAL COMPONENT CAN BE
      // RENDERED BY USING THE `Component` key
      // FOR ANY STEP TO PROCEED CALL `this.next`
      steps: {
        all: [
          {
            Component: comProps => <Request {...comProps} intro={intro} />,
          },
          // PASSWORD
          {
            heading: 'Create Password',
            key: 'password-passwordConfirmation',
            subheading: 'Enter your secret password, you will use this to access your account.',
            validate: (state, newProps) => {
              // eslint-disable-next-line no-console
              console.log('STEP: PASSWORD');
              const { data } = state;
              const { updateUser, user: { password } } = newProps;
              if (password) {
                return this.next();
              }

              let error = '';
              if (!data.password) {
                error = 'You need to set your password.';
              } else if (data.password.length < 8) {
                error = 'Your password must be a minimum of 8 characters.';
              } else if (data.password !== data.passwordConfirmation) {
                error = 'The password and repeat password fields must match.';
              } else if (
                !/[A-Z]/.test(data.password)
                || !/[a-z]/.test(data.password)
                || !/[0-9]/.test(data.password)
                // eslint-disable-next-line no-useless-escape
                || !/[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]/.test(data.password)
              ) {
                // g characters: uppercase, lowercase, at least 1 number, 1 non-alphanumeric character '),
                error = 'Your password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol.';
              }

              if (!error) {
                return updateUser({
                  password: data.password,
                  passwordConfirmation: data.passwordConfirmation,
                }, {
                  success: () => {
                    Helpers.notification.success('You have successfully set your password.');
                    this.next();
                  },
                });
              }
              return Helpers.notification.error(error);
            },
          },
          // LEGAL
          {
            heading: 'Terms and Conditions',
            key: 'legal',
            placeholder: 'Enter your full name',
            subheading: (
              <>
                By finishing this application, you acknowledge
                that you have read, understood, and agree to all of
                Carrot
                {'\''}
                s
                {' '}
                <Link to="/Carrot Credit - Terms and Conditions.pdf" target="_blank" download>Terms and Conditions</Link>
                {' '}
                and
                {' '}
                <Link to="/Carrot Credit - Privacy Policy.pdf" target="_blank" download>Privacy Policy</Link>
              </>
            ),
            validate: (state, newProps) => {
              // eslint-disable-next-line no-console
              console.log('STEP: LEGAL');
              const { data: { amount } } = state;
              const { portfolio: { legal } } = newProps;
              const application_id = Helpers.token.get('application:id');
              if (legal === '1') {
                return this.lastStep(application_id, amount);
              }

              const { data } = state;
              const parts = data.legal.trim().split(/(\s+)/).filter(items => !/(\s+)/.test(items));
              const { user: { firstname, lastname } } = newProps;
              const error = 'You need to enter your full name to accept the legal agreements.';
              try {
                if ((parts[0].toLowerCase() === firstname.toLowerCase() || parts[0].toLowerCase() === lastname.toLowerCase())
                  || (parts[1].toLowerCase() === firstname.toLowerCase() || parts[1].toLowerCase() === lastname.toLowerCase())
                ) {
                  return this.lastStep(application_id, amount);
                }
                return Helpers.notification.error(error);
              } catch {
                return Helpers.notification.error(error);
              }
            },
          },
        ],
        current: 0,
      },
    };
  }

  componentDidMount() {
    const { getPortfolio } = this.props;
    getPortfolio(Helpers.token.get('application:id'));
  }

  success = data => {
    const { addCard, load } = this.props;
    this.next();
    addCard(data.reference, response => {
      Helpers.notification.success(response.message);
      load();
    });
  }

  close = () => {
    const { steps: { all, current } } = this.state;
    this.setState({ steps: { all, current: current - 1 } });
  }

  lastStep = (application_id, amount) => {
    const { requestLoan, history } = this.props;
    requestLoan(application_id, Math.floor(amount * 100), data => {
      // eslint-disable-next-line no-console
      console.log(data.message);
      this.setState({ complete: true, loading: false });
    }, () => {
      history.push('/dashboard');
    });
  }

  change = type => e => {
    const { data } = this.state;
    this.setState({ data: { ...data, [type]: e.target.value } });
  }

  next = skipTo => {
    const { load } = this.props;
    const { steps: { current, all } } = this.state;
    const nextCurrent = skipTo || current + 1 > all.length - 1 ? all.length - 1 : current + 1;

    // When next is called, simply advance to the next screen
    // and call it's validate function
    // Individual screens validate input and call next if validations pass
    this.setState({
      steps: {
        all,
        current: nextCurrent,
      },
    }, () => {
      this.validateStep(nextCurrent)();
      load();
    });
  }

  validateStep = current => () => {
    const { steps: { all } } = this.state;
    // eslint-disable-next-line no-console
    console.log('VALIDATING:', all[current].key);

    if (all[current].validate) all[current].validate(this.state, this.props);
  }

  setAmount = amount => {
    const { data } = this.state;
    this.setState({ data: { ...data, amount } });
  }

  noop = () => null;

  render() {
    const { complete, data, steps: { current, all } } = this.state;
    const { portfolio, user: { info }, loan: { loading: loanRequestLoading } } = this.props;
    const {
      Component, key, footer, heading,
      subheading, placeholder,
    } = all[current];
    const loading = loanRequestLoading.some(endpoint => endpoint === '/loan');

    if (loading) {
      return <Loading size="big" />;
    } if (complete) {
      return (
        <Successful
          title="Application Successful"
          subtitle="We have received your application, a decision will be made and you will be notified in less than 15 minutes"
        />
      );
    } if (Component) {
      let { amount } = portfolio;
      amount = amount < 0 ? 0 : amount;

      // eslint-disable-next-line no-console
      console.log(`Portfolio: (Total: ${portfolio.amount}, Allowed: ${amount}`, 'Debt:', info.debt, 'Credit:', amount);
      // Component is <Loan />
      return (
        <Component
          {...this.props}

          // For this.state.current = 0
          amount={amount / 100}
          next={this.next}
          setAmount={this.setAmount}

          // For this.state.current = 1
          success={this.success}
          close={this.close}
        />
      );
    }

    // Split the key and loop it's parts
    // Use this.state.steps.all to render
    // various forms depending on the current
    // step (this.state.steps.current)
    const parts = key && key.split('-');
    return (
      <Page
        title="Onboarding"
        background="woman"
        header={(
          <>
            <div className="typography">Already have an account?</div>
            &nbsp;&nbsp;&nbsp;
            <Link to="/signin"><Button size="small" onClick={this.noop}>Sign in</Button></Link>
          </>
        )}
        footer={footer || this.secure}
      >
        <div className="center">
          <div className="heading">{heading}</div>
          <div className="subheading">{subheading}</div>
        </div>
        {
          parts
          && Array.from(new Array(parts.length)).map((_, i) => {
            const newKey = parts[i];
            return (
              <React.Fragment key={i}>
                <Input
                  placeholder={placeholder || `Enter your ${newKey.replace(/([A-Z])/, ' $1').toLowerCase()}`}
                  type={/password/.test(newKey) ? 'password' : 'text'}
                  onChange={this.change(newKey)}
                  value={data[newKey]}
                />
              </React.Fragment>
            );
          })
        }
        <Button
          size="large"
          onClick={this.validateStep(current)}
        >
          {
            current === 0
              ? (
                <>
                  Sign up with
                  <div className="divider" />
                  {' '}
                  Bamboo
                  <img className="button-logo" src={bambooLogo} alt="Bamboo Logo" />
                </>
              )
              : current === all.length - 1 ? 'Request Loan' : 'Next'
          }
        </Button>
      </Page>
    );
  }
}

export default Offer;
