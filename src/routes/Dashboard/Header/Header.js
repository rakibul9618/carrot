import React from 'react';
import { NavLink } from 'react-router-dom';
import SecondaryButton from '../../Home/Components/Common/Button/SecondaryButton';
import DropLogo from '../../Home/Assets/Icons/drop-logo.svg';
import Close from '../../Home/Assets/Icons/Close.svg';
import {
  Faqs, DropDown, DropDownHeader, DropDownLogo, DropImage, Footer, FooterSection
} from './HeaderElements';
import Facebook from '../../Home/Assets/Icons/facebook-drop.svg';
import Twitter from '../../Home/Assets/Icons/twitter-drop.svg';
import Instagram from '../../Home/Assets/Icons/instagram-drop.svg';
import Linkedin from '../../Home/Assets/Icons/linkedin-drop.svg';
import { CopyRight } from '../../Home/Components/Common/Footer/FooterElement';
import 'animate.css';

const Header = props => {
  const currentYear = new Date().getFullYear();
  const {
    menu,
    toggleMenu,
  } = props;

  return (
    <>
      {menu && (
      <DropDown className="animate__animated animate__slideInDown animate__delay-50s">
        <DropDownHeader>
          <NavLink to="/"><DropDownLogo src={DropLogo} alt="dropdown-logo" /></NavLink>
          <DropDownLogo src={Close} onClick={toggleMenu} />
        </DropDownHeader>
        <NavLink to="/dashboard"><Faqs>Dashboard</Faqs></NavLink>
        <NavLink to="/faqs"><Faqs>FAQs</Faqs></NavLink>
        <NavLink to="/forgot"><Faqs>Password</Faqs></NavLink>
        <NavLink to="/signin">
          <SecondaryButton fill="126px" color="white">
            Logout
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
            {/* <p>Docs</p>
            <p>Privacy</p>
            <p>Terms of Service</p> */}
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

export { Header };
