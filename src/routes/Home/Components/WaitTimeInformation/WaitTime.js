import React from 'react';
import {
  Container, TimeHeader, TimeCaption, TimeContent, Arrow
} from './WaitTimeElement';
import Phone from '../../Assets/Images/phone-image.svg';
import ArrowLeft from '../../Assets/Icons/arrow-left.svg';
import ArrowRight from '../../Assets/Icons/arrow-right.svg';

const WaitTime = () => (
  <TimeContent>
    <Container>
      <Arrow>
        <img src={ArrowRight} alt="arrow" />
        <img src={ArrowLeft} alt="arrow" />
      </Arrow>
      <TimeHeader>Minimal Wait Time On Loan Deposits</TimeHeader>
      <TimeCaption>Carrot helps users collect loans based on their Portfolio on a Carrot partner application. Our application process takes less time than making a cup of coffee.</TimeCaption>
    </Container>
    <img src={Phone} alt="phone" />
  </TimeContent>
);

export default WaitTime;
