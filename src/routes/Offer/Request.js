import React, { Component } from 'react';

import Info from './Info';

import { Keypad } from '../../components';

class Request extends Component {
  state = {
    firstLoad: true,
    show: 'keypad',
  };

  componentDidUpdate = prevProps => {
    const { firstLoad } = this.state;
    const { setAmount, amount, intro } = this.props;
    if (amount !== prevProps.amount) {
      setAmount(amount);
    }

    if (intro && firstLoad) {
      this.setState({ firstLoad: false, show: 'offer' });
    }
  }

  changeScreen = show => () => {
    this.setState({ show });
  }

  render() {
    const { show } = this.state;
    const {
      next, setAmount, amount, history,
    } = this.props;
    switch (show) {
    case 'offer':
      return <Info {...this.props} setAmount={setAmount} changeScreen={this.changeScreen('keypad')} next={next} amount={amount} />;
    case 'keypad':
      return (
        <Keypad
          back={process.env.NODE_ENV === 'development' ? this.changeScreen('offer') : () => history.push('/dashboard')}
          minimum={10}
          heading="You are eligible to receive up to"
          next={next}
          amount={amount}
          setAmount={setAmount}
        />
      );
    default:
      return null;
    }
  }
}

export default Request;
