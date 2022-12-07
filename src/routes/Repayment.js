import React from 'react';
import 'flagpack/dist/flagpack.css';
import { PaystackConsumer } from 'react-paystack';
import sha256 from 'sha256';

import {
  Keypad, Successful, Page, Loading
} from '../components';
import RepaymentFees from '../components/RepaymentFees';

import * as Helpers from '../helpers';

import arrowRight from '../assets/images/arrowRight.png';
import arrowRightBlack from '../assets/images/arrowRightBlack.png';

class Repayment extends React.Component {
  state = {
    amount: 0,
    loanID: 0,
    message: '',
    open: false,
    payStackAmount: 0,
    show: {
      choice: true,
      dollarAccountDetails: true,
      keypad: false,
      repaymentFees: true,
    },
    success: false,
  };

  componentDidMount() {
    const { history, location, load } = this.props;
    document.body.classList.remove('no-overflow');

    if (!location.search && (!location.query
      || typeof location.query.loanID === 'undefined'
      || typeof location.query.amount === 'undefined')) {
      Helpers.notification.error('You cannot access the repayment page, to go there click a repayment button.');
      return history.push('/dashboard');
    }

    if (location.search) {
      const amount = location.search.match(/amount=(\d*)/);
      if (amount && amount[1]) {
        this.setState({
          amount: amount[1] / 100, loanID: 0,
        });
      } else {
        return history.push('/dashboard');
      }
      load();
    } else if (location.query) {
      const { loanID, amount } = location.query;
      this.setState({
        amount, loanID,
      });
    } else {
      return history.push('/dashboard');
    }

    return null;
  }

  setAmount = payStackAmount => {
    this.setState({ payStackAmount });
  }

  // success = data => {
  //   const { loanID } = this.state;
  //   const {
  //     recordRepayment, load, getLoans, loan: { table: { limit, offset } },
  //   } = this.props;

  //   this.show(null, 'open', false)();

  //   recordRepayment(data.reference, loanID, response => {
  //     this.setState({
  //       message: response.message,
  //       success: true,
  //     });
  //     setTimeout(() => {
  //       load();
  //       getLoans(limit, offset);
  //     }, 1000);
  //   });
  // }

  success = () => {
    this.setState({
      message: 'You have successfully serviced one or more loans.',
      success: true,
    }, this.show(null, 'open', false));
  }

  getImage = slug => {
    switch (slug) {
    case 'naira-bank':
      return 'fp fp-rounded fp-lg ng';
    case 'auto-dollar-bank':
      return 'fp fp-rounded fp-lg us';
    case 'manual-dollar-bank':
      return 'fp fp-rounded fp-lg us';
    default:
      return '';
    }
  }

  goTo = () => {
    const { history } = this.props;
    history.push('/dashboard');
  }

  show = (comp, option, value) => () => {
    const { show } = this.state;
    this.setState({
      [option]: value,
      show: {
        ...show,
        ...Object.keys(show).reduce((prev, cur) => ({ ...prev, [cur]: false }), {}),
        [comp]: true,
      },
    });
  }

  back = trigger => () => {
    const { history } = this.props;
    history.push('/dashboard', {
      trigger,
    });
  }

  render() {
    const {
      amount, open, message, payStackAmount, success, show, loanID,
    } = this.state;
    const {
      user: {
        user_id, email, info, loading,
      },
    } = this.props;
    const rate = !info.rates ? 0 : info.rates.buy;

    if (loading.some(url => url === '/repayment')) {
      return <Loading size="big" />;
    } if (success) {
      return (
        <Successful
          title="Payment Successful"
          subtitle={message || 'We have received your payment, a receipt would be sent to your email shortly.'}
        />
      );
    } if (show.choice) {
      return (
        <Page
          title="Repayment"
          background="man"
          footer={<></>}
        >
          <div className="back" onClick={this.back()} style={{ marginLeft: '0px', marginTop: '20px' }}><img src={arrowRightBlack} alt="Back Button" style={{ height: '17px', width: '17px' }} /></div>
          <div className="center">
            <div className="heading">Repayment</div>
            <div className="subheading">How do you want to payback your credit line</div>
          </div>
          {
            [{ name: 'Naira Account', slug: 'naira-bank' }, { name: 'Dollar Account', slug: 'manual-dollar-bank' }].map((repay, i) => (
              <div key={i} className="picker-options" onClick={i === 0 ? this.show('repaymentFees') : this.show('dollarAccountDetails')}>
                <span className={this.getImage(repay.slug)} />
                <div>{repay.name}</div>
              </div>
            ))
          }
        </Page>
      );
    } if (show.keypad) {
      return (
        <Keypad
          minimum={1}
          back={this.show('repaymentFees')}
          heading="How much do you want to repay?"
          amount={amount}
          next={this.show(null, 'open', true)}
          setAmount={this.setAmount}
        />
      );
    } if (show.dollarAccountDetails) {
      return (
        <Page
          title="Repayment"
          background=""
          footer={<></>}
        >
          <div className="repayment-back" onClick={this.show('choice')}><img src={window.innerWidth > 765 ? arrowRight : arrowRightBlack} alt="Back Button" /></div>
          <div className="center" style={{ overflow: 'auto' }}>
            <div className="subheading align-left">Pay back in Dollars (USD)</div>
            <div className="subheading align-left">Please make a bank wire transfer to</div>
            <br />
            <br />
            <div className="subheading align-left">Beneficiary Name</div>
            <div className="subheading align-left font-bold">Carrot Innovation LLC</div>
            <br />
            <div className="subheading align-left">Beneficiary Name (International)</div>
            <div className="subheading align-left font-bold">Evolve Bank & Trust (Reference should contain &quot;Carrot Innovation LLC&quot;)</div>
            <br />
            <div className="subheading align-left">Account Number</div>
            <div className="subheading align-left font-bold">9800626430</div>
            <br />
            <div className="subheading align-left">Type of Account</div>
            <div className="subheading align-left font-bold">401 Warfield Drive, 1029 Hyattsville, MD 20785</div>
            <br />
            <div className="subheading align-left">Receiving Bank Name</div>
            <div className="subheading align-left font-bold">Evolve Bank & Trust</div>
            <br />
            <div className="subheading align-left">Receiving Bank Address</div>
            <div className="subheading align-left font-bold">6070 Poplar Ave, Suite 200 Memphis, TN 38119</div>
            <br />
            <div className="subheading align-left">ABA Routing Number</div>
            <div className="subheading align-left font-bold">084106768</div>
            <br />
            <div className="subheading align-left">SWIFT/BIC Code</div>
            <div className="subheading align-left font-bold">FRNAUS44XXX</div>
          </div>
          <div className="red-notice">Note:</div>
          <div className="subheading align-left font-bold">Please enter your Full Name and Email in the transfer notes or memo as a reference for your payment</div>
          <button className="typography button full-width repayment-goto" onClick={this.goTo}>Go to Dashboard</button>
        </Page>
      );
    } if (show.repaymentFees) {
      return (
        <RepaymentFees
          back={this.show('choice')}
          bankTransfer={this.show('keypad')}
          nairaDebitCard={this.show('keypad')}
        />
      );
    }

    return (
      <>
        {
          open
          && (
          <PaystackConsumer
            metadata={{
              action: 'repayment', id: sha256(`${user_id}`), loan_id: loanID, rate,
            }}
            publicKey={info.publicKey}
            amount={parseInt(payStackAmount * 100 * rate, 10)}
            email={process.env.NODE_ENV === 'development' ? 'tech@carrotcredit.com' : email}
            channels={['card', 'bank', 'mobile_money', 'qr', 'ussd']}
            text="Carrot-Repayment-Paystack"
            onSuccess={this.success}
            onClose={this.show(null, 'open', false)}
          >
            {({ initializePayment }) => <>{initializePayment()}</>}
          </PaystackConsumer>
          )
        }
      </>
    );
  }
}

export default Repayment;
