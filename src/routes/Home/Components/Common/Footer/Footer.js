import React from 'react';
import { Link } from 'react-router-dom';

import {
  FooterContent, FooterSection, FooterIcons, FooterLine, OtherSection, FooterDocuments, MobileOtherSection, CopyRight
} from './FooterElement';

import FooterIcon from '../../../Assets/Icons/footer-logo.svg';
import Facebook from '../../../Assets/Icons/facebook.svg';
import Twitter from '../../../Assets/Icons/twitter.svg';
import Instagram from '../../../Assets/Icons/instagram.svg';
import Linkedin from '../../../Assets/Icons/linkedin.svg';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <FooterContent>
    <FooterSection>
      <img src={FooterIcon} alt="footer" />
      <p><Link to="/faqs">FAQs</Link></p>
      <div>
        <FooterIcons src={Facebook} alt="facebook" />
        <FooterIcons src={Twitter} alt="twitter" />
        <FooterIcons src={Instagram} alt="instagram" />
        <FooterIcons src={Linkedin} alt="linkedin" />
      </div>
    </FooterSection>
    <FooterLine />
    <OtherSection>
      <p>
        &copy; carrotcredit
        {' '}
        {currentYear}
      </p>
      <FooterDocuments>
        <p><Link to="/Carrot Credit - Privacy Policy.pdf" target="_blank" download>Privacy Policy</Link></p>
        <p><Link to="/Carrot Credit - Terms and Conditions.pdf" target="_blank" download>Terms and Conditions</Link></p>
      </FooterDocuments>
    </OtherSection>
    <MobileOtherSection>
      <FooterDocuments>
        <p><Link to="/Carrot Credit - Privacy Policy.pdf" target="_blank" download>Privacy Policy</Link></p>
        <p><Link to="/Carrot Credit - Terms and Conditions.pdf" target="_blank" download>Terms and Conditions</Link></p>
      </FooterDocuments>
      <CopyRight>
        &copy; carrotcredit
        {' '}
        {currentYear}
      </CopyRight>
    </MobileOtherSection>
  </FooterContent>
);

export default Footer;
