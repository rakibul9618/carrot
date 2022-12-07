import React from 'react';
import 'flagpack/dist/flagpack.css';
import { Link } from 'react-router-dom';

import PaystackWithdrawal from './PaystackWithdrawal';

import {
  Keypad, Button, Page, Loading
} from '../../components';

import arrowRight from '../../assets/images/arrowRight.png';

class Withdrawal extends React.Component {
  state = {
    amount: 0,
    choice: '',
    show: {
      choice: false,
      keypad: false,
      processor: false,
    },
  };

  componentDidMount() {
    document.body.classList.remove('no-overflow');
    const { getProcessors } = this.props;
    getProcessors();
    document.title = 'Withdraw | Carrot';
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

  show = (comp, option, value) => () => {
    const { show } = this.state;
    this.setState({
      [option]: value,
      show: {
        ...show,
        [comp === 'keypad' ? 'currency' : 'keypad']: false,
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

  setAmount = amount => {
    this.setState({
      amount,
    });
  }

  render() {
    const { amount, choice, show } = this.state;
    const {
      user: { info, card }, withdrawal: { processors },
    } = this.props;

    if (show.keypad) {
      return (
        <Keypad
          minimum={10}
          back={this.back()}
          heading="Your wallet balance is"
          next={this.show('choice')}
          amount={info.balance / 100}
          setAmount={this.setAmount}
        />
      );
    } if (show.choice) {
      switch (choice) {
      case 'naira-bank':
        return <PaystackWithdrawal {...this.props} processor_id={1} amount={amount * 100} />;
      case 'manual-dollar-bank':
        return <PaystackWithdrawal {...this.props} processor_id={3} amount={amount * 100} />;
      default:
        return null;
      }
    }

    if (card === 1) {
      return (
        <div id="withdrawal">
          <div className="back" onClick={this.back()}><img src={arrowRight} alt="Back Button" /></div>
          {
            processors.map((processor, i) => processor.slug !== 'auto-dollar-bank' && (
              <div key={i} className="withdrawal-options" onClick={this.show('keypad', 'choice', processor.slug)}>
                <span className={this.getImage(processor.slug)} />
                <div>{processor.display_name}</div>
              </div>
            ))
          }
        </div>
      );
    } if (card === null) {
      return <Loading size="big" />;
    }

    return (
      <Page
        title="Add a card"
        background="man"
        header={(
          <>
            <div className="typography">Don&apos;t have an account?</div>
            &nbsp;&nbsp;&nbsp;
            <Link to="/signup"><Button size="small" onClick={() => null}>Sign up</Button></Link>
          </>
        )}
        footer={<></>}
      >
        <div className="center">
          <div className="heading">Add a card</div>
          <div className="subheading">To continue add a card.</div>
        </div>
        <Button size="large" onClick={this.back('add-card')}>
          Continue
        </Button>
      </Page>
    );
  }
}

export default Withdrawal;
