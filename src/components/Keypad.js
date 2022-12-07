import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';
import Header from './Header';

import * as Helpers from '../helpers';

import arrowRight from '../assets/images/arrowRight.png';
import arrowRightBlack from '../assets/images/arrowRightBlack.png';

class Keypad extends Component {
  state = {
    isFraction: false,
    number: '0',
  };

  toggleFraction = () => {
    const { number, isFraction } = this.state;
    this.setState({ isFraction: !isFraction }, () => {
      if (!isFraction) {
        this.setNum(`${number}.`);
      }
    });
  }

  setNum = newAmount => {
    const { setAmount } = this.props;
    this.setState({ number: newAmount }, () => {
      setAmount(newAmount);
    });
  };

  addNumber = paddingNumber => () => {
    const { amount } = this.props;
    const { number, isFraction } = this.state;
    const num = number === '0' ? '' : number;
    const period = /\.+/.test(num) ? '' : '.';
    const newAmount = !isFraction ? `${num}${paddingNumber}` : `${num}${period}${paddingNumber}`;
    // If a full stop exists then every character typed is for the tenth unit first
    // then the hundreth unit, and after that the tenth again, then the hundredth
    const decimalPlaces = newAmount.split('.')[1]?.length;
    if (parseFloat(newAmount) <= parseFloat(amount) && (!decimalPlaces || decimalPlaces <= 2)) {
      this.setNum(newAmount);
    } else if (decimalPlaces > 2) {
      Helpers.notification.error('You exceeded the max of 2 decimal places');
    } else {
      Helpers.notification.error(`Maximum allowed is $${Helpers.formatMoney(amount)}`);
    }
  };

  removeNumber = () => {
    const { number } = this.state;
    const num = (`${number}`);
    let newAmount = num.substr(0, num.length - 1);
    if (newAmount.substr(-1) === '.') {
      newAmount = newAmount.substr(0, newAmount.length - 1);
      this.toggleFraction();
    }

    if (newAmount === '') {
      this.setNum('0');
    } else {
      this.setNum(newAmount);
    }
  };

  setMax = () => {
    const { amount } = this.props;
    this.setNum(amount);
  };

  continue = () => {
    const { next, minimum } = this.props;
    const { number } = this.state;
    if (number >= minimum) {
      next();
    } else {
      Helpers.notification.error(
        `You need to enter a number greater than $${minimum} to continue.`
      );
    }
  };

  render() {
    const {
      amount, back, heading,
    } = this.props;
    const { number } = this.state;
    const { outerWidth: width } = window;
    return (
      <div id="keypad">
        <Header mini headerColor={width <= 765 ? 'white' : 'black'} />
        <div className="back" onClick={back}><img src={window.innerWidth > 765 ? arrowRightBlack : arrowRight} alt="Back Button" /></div>
        <div id="keypad-dashboard"><Link to="/dashboard">Go to Dashboard</Link></div>
        <div id="keypad-heading">{heading}</div>
        <div id="keypad-amount">
          $
          {Helpers.formatMoney(amount)}
        </div>
        <div id="keypad-value">
          $
          {number}
        </div>
        <div className="keypad-column">
          <div className="keypad-row" onClick={this.addNumber(1)}>1</div>
          <div className="keypad-row" onClick={this.addNumber(2)}>2</div>
          <div className="keypad-row" onClick={this.addNumber(3)}>3</div>
        </div>
        <div className="keypad-column">
          <div className="keypad-row" onClick={this.addNumber(4)}>4</div>
          <div className="keypad-row" onClick={this.addNumber(5)}>5</div>
          <div className="keypad-row" onClick={this.addNumber(6)}>6</div>
        </div>
        <div className="keypad-column">
          <div className="keypad-row" onClick={this.addNumber(7)}>7</div>
          <div className="keypad-row" onClick={this.addNumber(8)}>8</div>
          <div className="keypad-row" onClick={this.addNumber(9)}>9</div>
        </div>
        <div className="keypad-column">
          <div className="keypad-row" onClick={this.toggleFraction}>&bull;</div>
          <div className="keypad-row" onClick={this.addNumber(0)}>0</div>
          <div className="keypad-row" onClick={this.removeNumber}>&lt;</div>
        </div>
        <div id="keypad-full-button">
          <Button size="large" background="white" onClick={this.continue}>
            Confirm
          </Button>
        </div>
        <div id="keypad-max" onClick={this.setMax}>Max amount</div>
      </div>
    );
  }
}

Keypad.props = {
  amount: PropTypes.number.isRequired,
  back: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  minimum: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default Keypad;
