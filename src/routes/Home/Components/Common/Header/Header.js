import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderIcon from '../../../Assets/Icons/header-icon.svg';
import HeaderLogo from '../../../Assets/Icons/header-logo.svg';
import SecondaryButton from '../Button/SecondaryButton';
import MobileHeaderIcon from '../../../Assets/Icons/mobile-header-icon.svg';
import DropLogo from '../../../Assets/Icons/drop-logo.svg';
import Close from '../../../Assets/Icons/Close.svg';
import {
  Container, Icon, Logo, HeaderLeft, HeaderRight, Faqs, MobileContainer, DropDown, DropDownHeader, DropDownLogo, DropImage, Footer, FooterSection
} from './HeaderElements';
import MenuIcon from '../../../Assets/Icons/menu-button.svg';
import Facebook from '../../../Assets/Icons/facebook-drop.svg';
import Twitter from '../../../Assets/Icons/twitter-drop.svg';
import Instagram from '../../../Assets/Icons/instagram-drop.svg';
import Linkedin from '../../../Assets/Icons/linkedin-drop.svg';
import { CopyRight } from '../Footer/FooterElement';
import 'animate.css';

const Header = () => {
  const currentYear = new Date().getFullYear();
  const [set, setState] = useState(false);

  const handleChange = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  return (
    <>
      <Container>
        <HeaderLeft>
          <Icon src={HeaderIcon} alt="header-icon" />
          <NavLink to="/"><Logo src={HeaderLogo} alt="header-logo" /></NavLink>
        </HeaderLeft>
        <HeaderRight>
          <NavLink to="/faqs"><Faqs>FAQs</Faqs></NavLink>
          <NavLink to="/signin"><Faqs>Sign In</Faqs></NavLink>
          <SecondaryButton fill="126px">
            <NavLink to="/signup">
              Sign Up
            </NavLink>
          </SecondaryButton>
        </HeaderRight>
      </Container>
      <MobileContainer>
        <HeaderLeft>
          <Icon src={MobileHeaderIcon} alt="header-icon" />
          <NavLink to="/"><Logo src={HeaderLogo} alt="header-logo" /></NavLink>
        </HeaderLeft>
        <HeaderRight onClick={handleChange} style={{ marginTop: -110 }}>
          <Icon src={MenuIcon} />
        </HeaderRight>
      </MobileContainer>
      {set && (
      <DropDown className="animate__animated animate__slideInDown animate__delay-50s">
        <DropDownHeader>
          <NavLink to="/"><DropDownLogo src={DropLogo} alt="dropdown-logo" /></NavLink>
          <DropDownLogo src={Close} onClick={handleClose} />
        </DropDownHeader>
        <NavLink to="/dashboard"><Faqs>Dashboard</Faqs></NavLink>
        <NavLink to="/signin"><Faqs>Logout</Faqs></NavLink>
        <NavLink to="/signup">
          <SecondaryButton fill="126px" color="white">
            Sign Up
            {' '}
          </SecondaryButton>
        </NavLink>
        <NavLink to="/signin">
          <SecondaryButton fill="126px" color="white">
            Sign In
            {' '}
          </SecondaryButton>
        </NavLink>
        <DropImage>
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagram} alt="instagram" />
          <img src={Linkedin} alt="linkedin" />
        </DropImage>
        <FooterSection>
          <Footer>
            <p>Docs</p>
            <p>Privacy</p>
            <p>Terms of Service</p>
          </Footer>
          <CopyRight>
            &copy; carrotcredit
            {' '}
            {currentYear}
          </CopyRight>
        </FooterSection>
      </DropDown>
      )}
    </>
  );
};

export default Header;
