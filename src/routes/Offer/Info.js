import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import * as Helpers from '../../helpers';

import offer from '../../assets/images/offer.svg';
import arrowRightBlack from '../../assets/images/arrowRightBlack.png';

class Info extends Component {
  request = newAmount => () => {
    const {
      changeScreen, next, amount, setAmount,
    } = this.props;
    if (amount > 10) {
      if (newAmount === 'partial') {
        changeScreen();
      } else {
        setAmount(newAmount);
        next();
      }
    } else {
      Helpers.notification.error('Your credit line is less than $10.');
    }
  }

  back = trigger => () => {
    const { history } = this.props;
    history.push('/dashboard', {
      trigger,
    });
  }

  render() {
    const { user: { firstname }, amount } = this.props;
    return (
      <div id="offer">
        <div className="back" onClick={this.back()} style={{ marginTop: '20px' }}><img src={arrowRightBlack} alt="Back Button" /></div>
        <div id="offer-customer">
          Hello
          {' '}
          {firstname}
        </div>
        <div id="offer-reason">You are an eligible customer of our partner application</div>
        <img src={offer} id="offer-banner" alt="Next" />
        <div id="offer-description">You are eligible to receive an instant loan of up to</div>
        <div id="offer-amount">
          $
          {amount ? Helpers.formatMoney(amount) : 0}
        </div>
        <div id="offer-tenure-card">
          <div id="offer-tenure">6% per month till repayment is complete</div>
          <div id="offer-tenure-description">
            The minimum repayment expected per month is 6%. This comprises of a 3% interest rate and a 3% repayment of the principal.
            This repayment plan will occur monthly until the loan is fully repaid.
          </div>
        </div>
        <div id="offer-full-button">
          <Button size="large" onClick={this.request(amount)}>
            Request Full Amount
          </Button>
        </div>
        <div id="offer-partial-button" onClick={this.request('partial')}>Request Partial Amount</div>
        <div id="offer-footer">
          By clicking any of the request buttons, you acknowledge that you have read and understood, and agree to Carrot
          {'\''}
          s
          {' '}
          <Link to="/Carrot Credit - Terms and Conditions.pdf" target="_blank" download>Terms and Conditions</Link>
          {' '}
          and
          {' '}
          <Link to="/Carrot Credit - Privacy Policy.pdf" target="_blank" download>Privacy Policy</Link>
        </div>
      </div>
    );
  }
}

export default Info;
