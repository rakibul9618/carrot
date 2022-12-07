/* eslint-disable global-require */
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footerSection" id="footerSection">
      <div className="footerFlex ">
        <div className="carrotLogoFooter ">
          <a href="/">
            <img src={require('../images/carrotlogoblack.svg')} alt="logo" width="90" />
          </a>
        </div>

        <div className="footerLinkDiv ">

          <div className="footerLink ">
            <div className="footerLinkHeader">
              Products
            </div>
            <div className="footList">
              <ul>
                <li><a href="#section2">Individual</a></li>
                <li><a href="#section2">Business</a></li>
                {/* <li><a href="#section2">Trade</a></li> */}
              </ul>
            </div>
          </div>

          <div className="footerLink ">
            <div className="footerLinkHeader">
              About
            </div>
            <div className="footList">
              <ul>
                <li><a href="#FAQSection">Who we are</a></li>
                <li><a href="#FAQSection">FAQs</a></li>
                {/* <li><a href="#footerSection">Work with us</a></li>
                    <li><a href="#footerSection">Our culture</a></li>
                    <li><a href="#footerSection">Foundation</a></li> */}
              </ul>
            </div>
          </div>

          <div className="footerLink ">
            <div className="footerLinkHeader">
              Legal
            </div>
            <div className="footList">
              <ul>
                <li><a href="/agreement">User Agreement</a></li>
                {/* <li><a href="#footerSection">Legal</a></li> */}
              </ul>
            </div>
          </div>

          <div className="footerLink ">
            <div className="footerLinkHeader">
              Connect
            </div>
            <div className="footList">
              <ul>
                <li><a href="https://www.instagram.com/getcarrotcredit/">Instagram</a></li>
                <li><a href="https://www.twitter.com/getcarrotcredit/">Twitter</a></li>
                {/* <li><a href="#footerSection">Facebook</a></li> */}
              </ul>
            </div>
          </div>

        </div>

      </div>

      <div className="footerText ">
        <hr />
        {/* Carrot does not provide investment advice and individual investors should make their own decisions or seek independent advice. The value of investments can go up as well as down and you may receive back less than your original investment. Carrot is a technology platform, not a registered broker-dealer or investment adviser. Brokerage services are provided by the following: US-traded securities, including fractional trading, are provided to Carrot users by DriveWealth LLC, a regulated member of FINRA/SIPC. Drivewealth is a member of SIPC, which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). Explanatory brochure available upon request or at www.sipc.org. Nigerian account traded securities are provided by Lambeth Capital LTD, a SEC registered broker-dealer and member of the Nigerian Stock Exchange. Lambeth Capital does not make any personal recommendations to buy, sell or otherwise deal in investments. Investors make their own investment decisions. The services and securities provided by Lambeth Capital may not be suitable for all customers and, if you have any doubts, you should seek advice from an independent financial institution.
            <br />
            <br />
            For further details see our
            {' '}
            <a href="#footerSection">Legal Disclosures</a>
            .  */}
        By using this website, you accept our
        {' '}
        <a href="/agreement">User Agreement</a>
        {/* {' '}
            and
            {' '}
            <a href="#footerSection">Privacy Policy</a> */}
        .
        <br />
        ©
        {' '}
        {currentYear}
        , Carrot Inc. All Rights Reserved.
      </div>
    </section>
  );
};
export default Footer;
