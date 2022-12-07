import React from 'react';
import * as MdIcons from 'react-icons/md';
import './RepaymentFees.css';

import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow.png';
import vector from '../../assets/images/vector.png';
import arrowRightBlack from '../../assets/images/arrowRightBlack.png';

const RepaymentFees = props => {
  const { back, bankTransfer, nairaDebitCard } = props;
  return (
    <>
      <div className="App">
        <nav>
          <div className="image">
            <img src={logo} alt="" style={{ width: '90px' }} />
          </div>
        </nav>

        <div className="arrow" onClick={back}>
          <img src={arrowRightBlack} alt="" style={{ width: '15px' }} />
        </div>

        <div className="repay-content">
          <h1>
            How do you want to make
            {' '}
            <br />
            {' '}
            your payment?
          </h1>
        </div>

        <div className="repay-method">
          <div className="bank-transfer" onClick={bankTransfer}>
            <div className="arrow-image">
              <img src={arrow} alt="" className="syn" />
            </div>

            <p className="processing-fee">
              <b>Bank Transfer</b>
              {' '}
              <br />
              N50 NGN processing fee
            </p>
            <MdIcons.MdKeyboardArrowRight className="great" />
          </div>

          <div className="naira-debit-card" onClick={nairaDebitCard}>
            <div className="vector-image">
              <img src={vector} alt="" className="vec" />
            </div>

            <p className="processing-fee">
              <b>Naira Debit Card</b>
              {' '}
              <br />
              1.5% processing fee capped at
              {' '}
              <br />
              2000 NGN
            </p>
            <MdIcons.MdKeyboardArrowRight className="key" />
          </div>
        </div>

        <div className="note">
          <button>Note:</button>
          <p>
            The processing fee is not a Carrot Charge but a
            {' '}
            <br />
            fee from our payment processor - Paystack.
          </p>
        </div>
      </div>
    </>
  );
};

export default RepaymentFees;
