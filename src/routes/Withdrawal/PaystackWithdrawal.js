import React from 'react';

import {
  Button, Page, Input, Header, Successful
} from '../../components';

import * as Helpers from '../../helpers';

class PaystackWithdrawal extends React.Component {
  state = {
    details: {},
    name: '',
    sendToAccount: 'new',
    success: false,
    verified: false,
  };

  componentDidUpdate(_, prevState) {
    const { details } = this.state;
    if (JSON.stringify(details) !== JSON.stringify(prevState.details)) {
      const { verifyWithdrawalDetails, processor_id } = this.props;

      // TODO: Whether or not account details for a
      // processor should be verified should be a
      // processor-level config perhaps called `verify`
      if (processor_id === 3) {
        this.setState({ verified: true });
      } else if (this.validate()) {
        verifyWithdrawalDetails(details, processor_id, response => {
          const { data: { account_name } } = response.data;
          this.setState({ name: account_name, verified: true });
        });
      }
    }
  }

  change = slug => e => {
    const { details } = this.state;
    this.setState({ details: { ...details, [slug]: e.target.value }, verified: false });
  };

  withdraw = () => {
    const {
      details, verified,
    } = this.state;
    const {
      amount, withdraw, processor_id,
    } = this.props;

    if (!this.validate()) {
      return Helpers.notification.error(
        'The bank details you entered are incorrect.'
      );
    }

    if (!verified) {
      return Helpers.notification.error(
        'We could not verify the details you input. Try again.'
      );
    }

    return withdraw(amount, details, processor_id, () => {
      this.refresh();
      this.setState({
        success: true,
      });
    });
  }

  refresh = () => {
    const {
      load, getLoans, getRepayments, getWithdrawals, getPortfolio,
      loan: { table: { limit: loanLimit, offset: loanOffset } },
      repayment: { table: { limit: repaymentLimit, offset: repaymentOffset } },
      withdrawal: { table: { limit: withdrawalLimit, offset: withdrawalOffset } },
    } = this.props;
    load();
    getLoans(loanLimit, loanOffset);
    getRepayments(repaymentLimit, repaymentOffset);
    getWithdrawals(withdrawalLimit, withdrawalOffset);
    getPortfolio(1);
  }

  validate = () => {
    const { details } = this.state;
    const { withdrawal: { processors }, processor_id } = this.props;
    let invalidParam = '';
    processors.map(processor => {
      if (processor.processor_id === `${processor_id}`) {
        processor.requirements.every(requiredParam => {
          if (!details[requiredParam.slug] || typeof details[requiredParam.slug] === 'undefined') {
            invalidParam = requiredParam.slug;
            return false;
          }

          if (
            requiredParam.type === 'number' && (!/^\d+$/.test(details[requiredParam.slug])
            || details[requiredParam.slug].length < 10)) {
            invalidParam = requiredParam.slug;
            return false;
          }

          return true;
        });
      }

      return null;
    });

    return !invalidParam;
  }

  sendToAccount = e => {
    const { withdrawal: { processors }, processor_id } = this.props;
    const sendToAccount = e.target.value;

    if (sendToAccount === 'old') {
      let details = {};
      processors.map(processor => {
        if (processor.processor_id === `${processor_id}`) {
          details = processor.details;
        }
        return null;
      });

      this.setState({
        details,
      });
    } else {
      this.setState({
        details: {},
      });
    }

    this.setState({
      sendToAccount,
      verified: false,
    });
  }

  render() {
    const {
      details, sendToAccount, verified, name, success,
    } = this.state;
    const {
      user, user: { loading }, withdrawal: { processors }, processor_id, amount,
    } = this.props;

    if (success) {
      return (
        <Successful
          title="Withdrawal"
          subtitle={`We have begun the process of transferring $${amount / 100} to your bank account provided`}
          action="Go to Dashboard"
        />
      );
    }
    return (
      <>
        <Header user={user} />
        <Page
          title="Withdraw"
          background=""
          header={null}
          footer={<></>}
          hasLogo={false}
        >
          <div className="center">
            <div className="heading">Withdraw Funds</div>
            <div className="subheading">
              You need to give us your bank account details to transfer funds to your account.
            </div>
          </div>
          {/* <div className="withdrawal-page-separator" /> */}
          <Input
            type="radio"
            onChange={this.sendToAccount}
            value={sendToAccount}
            options={[{
              label: 'Use already exisiting account',
              value: 'old',
            }, {
              label: 'I want to use another account',
              value: 'new',
            }]}
          />
          {
            processors.map((processor, i) => processor.processor_id === `${processor_id}`
              && processor.requirements.map((requirement, j) => (
                <Input
                  key={`${i}//${j}`}
                  placeholder={requirement.placeholder}
                  type={requirement.type}
                  onChange={this.change(requirement.slug)}
                  value={details[requirement.slug] || ''}
                  options={requirement.options && requirement.options.map(option => ({ label: option.name, value: option.code }))}
                />
              )))
          }
          <div className="placeholder">
            {verified && name}
          </div>
          <Button loading={loading.some(url => url === '/withdrawal')} disabled={!verified} size="large" onClick={this.withdraw}>
            Next
          </Button>
        </Page>
      </>
    );
  }
}

export default PaystackWithdrawal;
