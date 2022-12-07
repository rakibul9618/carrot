import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Page, Input } from '../../components';

import bambooLogo from '../../assets/images/bamboo.svg';
import ssl from '../../assets/images/ssl.svg';

class Signup extends React.Component {
  state = {
    data: {
      bvn: '',
      email: '',
      firstname: '',
      lastname: '',
      mobile: '',
      password: '',
      passwordConfirmation: '',
    },
    /* SIGN UP STEPS */
    steps: {
      all: [
        // MOBILE
        {
          footer: 'By clicking "Sign up with Bamboo", you acknowledge that you have read, understood, and agree to Carrot\'s  Terms and Conditions and Privacy Policy.',
          heading: 'Sign Up',
          key: 'mobile',
          subheading: 'Welcome to Carrot, to continue enter your mobile number',
        },
        // FIRSTNAME AND LASTNAME
        {
          heading: 'Firstname and Lastname',
          key: 'firstname-lastname',
          subheading: 'To continue enter your firstname and lastname',
        },
        // MOBILE
        {
          heading: 'Email',
          key: 'email',
          subheading: 'Enter your email to continue',
        },
        // BVN
        // {
        //   key: 'bvn',
        //   heading: 'BVN Verification',
        //   subheading: 'Regulations require us to collect BVN of customers as part of our KYC.',
        // },
        // PASSWORD
        {
          heading: 'Create Password',
          key: 'password-passwordConfirmation',
          subheading: 'Enter your secret password, you will use this to access your account',
        },
      ],
      current: 0,
    },
  };

  // componentDidMount = this.skip;

  secure = (
    <>
      <img src={ssl} alt="SSL" />
      {' '}
      Your information is encrypted and securley transmitted using SSL.
    </>
  );

  change = type => e => {
    const { data } = this.state;
    this.setState({ data: { ...data, [type]: e.target.value } });
  }

  skip = () => {
    const { getUser, history } = this.props;
    getUser(() => {
      // Jump to the next null step
      const { user } = this.props;
      const { data, steps } = this.state;
      let current = -1;
      // Don't use the `user` variable in Object.keys,
      // to maintain the order of the onboarding process
      Object.keys(data).some((dataPoint, i) => {
        const bool = user[dataPoint] === null;
        if (bool) current = i;
        return bool;
      });
      if (current === -1) return history.push('/dashboard');
      this.setState({
        steps: {
          ...steps,
          current,
        },
      });
      return null;
    });
  }

  next = () => {
    const { updateUser } = this.props;
    const { data, steps: { current, all } } = this.state;
    const { key } = all[current];
    const parts = key.split('-');
    const newData = {};
    parts.map(part => {
      newData[part] = data[part];
      return null;
    });

    updateUser(newData, this.skip);
  }

  noop = () => null;

  render() {
    const { data, steps: { current, all } } = this.state;
    const {
      key, footer, heading, subheading,
    } = all[current];

    const parts = key.split('-');
    return (
      <Page
        title="Signup"
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
          Array.from(new Array(parts.length)).map((_, i) => {
            const newKey = parts[i];
            return (
              <React.Fragment key={i}>
                <Input
                  placeholder={`Enter your ${newKey.replace(/([A-Z])/, ' $1').toLowerCase()}`}
                  type={/password/.test(newKey) ? 'password' : 'text'}
                  onChange={this.change(newKey)}
                  value={data[newKey]}
                />
              </React.Fragment>
            );
          })
        }
        <Button size="large" onClick={this.next}>
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
              : 'Next'
          }
        </Button>
      </Page>
    );
  }
}

export default Signup;
