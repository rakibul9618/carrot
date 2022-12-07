import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderCaption, Heading, HeaderContainer, SmallCaption, Group, HomeImage, MobileButton
} from './HomeElement';
import Apple from '../../Assets/Icons/apple.svg';
import Andriod from '../../Assets/Icons/android-logo.svg';
import Image from '../../Assets/Images/image1.png';
import LoanInfo from '../LoanInformation/LoanInfo';
import WaitTime from '../WaitTimeInformation/WaitTime';
import AppUsage from '../AppUsage/AppUsage';
import SubmitMail from '../SubmitEmail/SubmitMail';
import Footer from '../Common/Footer/Footer';
import SecondaryButton from '../Common/Button/SecondaryButton';

const Home = () => (
  <>
    <HeaderContainer>
      <Heading>Get Flexible Loans at low interest rates</Heading>
      <div>
        <HeaderCaption size="450px">Carrot enables our customers to access funds by leveraging their digital asset holdings. Our application process takes less time than making a cup of coffee.</HeaderCaption>
        <Group>
          <SmallCaption>Coming soon on</SmallCaption>
          <img src={Apple} alt="apple" />
          <img src={Andriod} alt="android" />
        </Group>
      </div>
      <MobileButton><Link to="/signup"><SecondaryButton fill="126px" bottom="31px">Sign Up </SecondaryButton></Link></MobileButton>
    </HeaderContainer>
    <HomeImage><img src={Image} alt="home" /></HomeImage>
    <LoanInfo />
    <WaitTime />
    <AppUsage />
    <SubmitMail />
    <Footer />
  </>
);

export default Home;
