/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Faqs from './Faqs/Faqs';
import * as Helpers from '../../helpers';
import Header from './Header';
import Footer from './Footer';

// import blackLogo from './images/carrotlogoblack.svg';

import './index.css';
// import './Navbar.css';
import './Section1.css';
import './AboutSection.css';
import './Unique.css';
import './Partners.css';
import './FAQ.css';
import './GetStarted.css';
// import './Footer.css';
import './Section2.css';

import './fonts/TT-Norms Pro/style.css';

const NewHome = ({ contact }) => {
  const [getStartedData, setGetStartedData] = useState({
    email: '',
    emailPermit: false,
    fullname: '',
    message: '',
    userType: 'Individual',
  });

  const [mailResponse, setMailResponse] = useState({
    error: '',
    success: '',
  });

  useEffect(() => {
    if (window.groove.widget) window.groove.widget.destroy();

    return () => {
      if (window.groove.widget) window.groove.widget.init('697d31d3-878e-400c-bd9d-96926e6917f8', {});
    };
  });

  const handleFormInput = (dataField, newData, existingData = getStartedData) => {
    setGetStartedData({
      ...existingData,
      [dataField]: newData,
    });
  };

  const handleInputChange = e => {
    const dataField = e.target.name;
    const newData = e.target.value;
    handleFormInput(dataField, newData);
  };

  const handleCheck = field => (e, existingData = getStartedData) => {
    setGetStartedData({
      ...existingData,
      [field]: e.target.checked,
    });
  };

  const handleFormSubmit = () => {
    setTimeout(() => {
      contact(
        getStartedData.email,
        getStartedData.emailPermit,
        getStartedData.fullname ? Helpers.capitalizeFirstLetter3(getStartedData.fullname) : '-',
        getStartedData.message ? getStartedData.message : '-',
        getStartedData.userType,
        res => {
          setMailResponse({
            error: '',
            success: res.message,
          });
          setTimeout(() => {
            setMailResponse({
              error: '',
              success: '',
            });
          }, 2000);
        },
        err => {
          setMailResponse({
            error: err?.data?.error[0],
            success: '',
          });
          setTimeout(() => {
            setMailResponse({
              error: '',
              success: '',
            });
          }, 2000);
        }
      );
    }, 500);
    setTimeout(() => {
      setGetStartedData({
        email: '',
        emailPermit: false,
        fullname: '',
        message: '',
        userType: 'Individual',
      });
    }, 2000);
  };

  return (
    <div>
      <Header />

      <section className="section1" id="section1">
        <h1 className="section1-text">
          Credit without
          <br />
          the
          {' '}
          <span className="hassle">hassle</span>
        </h1>
        <div>
          <img src={require('./images/confetti-mobile/Frame 35.png')} alt="confetti" className="confetti-mobile c35" />
          <img src={require('./images/confetti-mobile/Frame 33.png')} alt="confetti" className="confetti-mobile c33" />
          <img src={require('./images/confetti-mobile/Frame 42.png')} alt="confetti" className="confetti-mobile c37" />
          <img src={require('./images/confetti-mobile/Frame 38.png')} alt="confetti" className="confetti-mobile c38" />
          <img src={require('./images/confetti-mobile/Frame 41.png')} alt="confetti" className="confetti-mobile c39" />
          <img src={require('./images/confetti-mobile/Frame 40.png')} alt="confetti" className="confetti-mobile c40" />
          <img src={require('./images/confetti-mobile/Frame 41.png')} alt="confetti" className="confetti-mobile c41" />
          <img src={require('./images/confetti-mobile/Frame 42.png')} alt="confetti" className="confetti-mobile c42" />

          <img src={require('./images/confetti-desktop/Frame 27.png')} alt="confetti" className="confetti-desktop cd27" />
          <img src={require('./images/confetti-desktop/Frame 33.png')} alt="confetti" className="confetti-desktop cd33" />
          <img src={require('./images/confetti-desktop/Frame 34.png')} alt="confetti" className="confetti-desktop cd34" />
          <img src={require('./images/confetti-desktop/Frame 35.png')} alt="confetti" className="confetti-desktop cd35" />
          <img src={require('./images/confetti-desktop/Frame 36.png')} alt="confetti" className="confetti-desktop cd36" />
          <img src={require('./images/confetti-desktop/Frame 37.png')} alt="confetti" className="confetti-desktop cd37" />
          <img src={require('./images/confetti-desktop/Frame 38.png')} alt="confetti" className="confetti-desktop cd38" />
          <img src={require('./images/confetti-desktop/Frame 39.png')} alt="confetti" className="confetti-desktop cd39" />
          <img src={require('./images/confetti-desktop/Frame 40.png')} alt="confetti" className="confetti-desktop cd40" />
          <img src={require('./images/confetti-desktop/Frame 41.png')} alt="confetti" className="confetti-desktop cd41" />
          <img src={require('./images/confetti-desktop/Frame 42.png')} alt="confetti" className="confetti-desktop cd42" />
        </div>
      </section>

      <section className="section2" id="section2">
        <div className="businessItem">
          <div className="section2Heading">
            Business
          </div>
          <div className="section2ExtraParagraph">
            Offer your customers a credit line that will also grow your revenue
          </div>
          <div className="section2Button">
            <a href="#contactUs">
              <button type="button" className="btn btn-outline noBorderOutline">Contact us</button>
            </a>
          </div>
        </div>

        <div className="shopperItem">
          <div className="section2Heading">
            Individual
          </div>
          <div className="section2ExtraParagraph">
            Use your digital assets as collateral instead of selling it
          </div>
          <div className="section2Button">
            <Link to="/signup">
              <button type="button" className="btn btn-outline noBorderOutline">Get started</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="aboutSection" id="aboutSection">
        <div className="aboutText">
          <div className="aboutHeading">
            What is Carrot?
          </div>
          <div className="aboutParagraph">
            Carrot provides a quick line of credit so you never have to liquidate assets
          </div>
          <div className="aboutList">
            <ul className="aboutIcon">
              <li>
                <span><div className="checkCircle"><i className="bi bi-check" /></div></span>
                Access Carrot from partner app
              </li>
              <li>
                <span><div className="checkCircle"><i className="bi bi-check" /></div></span>
                Fill out application form
              </li>
              <li>
                <span><div className="checkCircle"><i className="bi bi-check" /></div></span>
                Loan disbursed within 10 minutes!
              </li>
            </ul>
          </div>
        </div>
        <div className="aboutPicture">
          <img src={require('./images/about-image-new2.png')} alt="about" />
        </div>
      </section>

      <section className="uniqueSection ">
        <div className="uniqueHeader ">
          What makes us unique?
        </div>

        <div className="uniqueImage boxRight ">
          <img className="mobileUniqueImg" src={require('./images/unique/unique1.png')} alt="unique" />
          <img className="desktopUniqueImg" src={require('./images/unique/unique1d.png')} alt="unique" />
          <div className="textOverImage">
            <div className="uniqueTitle">
              Use your
              existing
              digital assets
            </div>
            <div className="uniqueExtraParagraph">
              Transactions are approved wherever the credit card is accepted, based on your available credit line
            </div>
          </div>
        </div>

        <div className="uniqueImage boxLeft ">
          <img className="mobileUniqueImg" src={require('./images/unique/unique2.png')} alt="unique" />
          <img className="desktopUniqueImg" src={require('./images/unique/unique2d.png')} alt="unique" />
          <div className="textOverImage">
            <div className="uniqueTitle">
              Quickest
              cashout
            </div>
            <div className="uniqueExtraParagraph">
              No applications, credit check, or long required to start a payment plan
            </div>
          </div>
        </div>

        <div className="uniqueImage boxRight ">
          <img className="mobileUniqueImg" src={require('./images/unique/unique3.png')} alt="unique" />
          <img className="desktopUniqueImg" src={require('./images/unique/unique3d.png')} alt="unique" />
          <div className="textOverImage">
            <div className="uniqueTitle">
              Transparent
            </div>
            <div className="uniqueExtraParagraph">
              We communicate all rates and fees with our partners to ensure both our partners and their users have a clear understanding of the value we provide
            </div>
          </div>
        </div>

        <div className="uniqueImage boxLeft down ">
          <img className="mobileUniqueImg" src={require('./images/unique/unique4.png')} alt="unique" />
          <img className="desktopUniqueImg" src={require('./images/unique/unique4d.png')} alt="unique" />
          <div className="textOverImage">
            <div className=" uniqueTitle">
              Compliant all
              <br />
              the way
            </div>
            <div className="uniqueExtraParagraph">
              We’re constantly going through regulatory hassle so you don’t have to. We are compliant with all regulatory bodies governing our operations and that of our third-party partners
            </div>
          </div>
        </div>

      </section>

      <section className="partnersSection">
        <div className="partnersHeading">
          Our partners
        </div>

        <div className="partnersFlex">
          <div className="partnersText">
            <div className="trustHeading ">
              Over 5k users trust Carrot
            </div>
            <div className="trustParagraph">
              For life’s special moments or its emergencies, we have created a product that covers every need.
              <br />
              We’re also currently in talks with several financial institutions to bring Carrot to their customers.
            </div>
          </div>

          <div className="partnersImage">
            <img src={require('./images/partners2.png')} alt="partners" />
          </div>
        </div>

        <div className="partnersLogoText">
          Our current partners include:
        </div>

        <div className="partnersLogos">
          <div className="logo ">
            <img src={require('./images/logo-magicfund.png')} alt="logo" />
          </div>
          <div className="logo ">
            <img src={require('./images/logo-bamboo.png')} alt="logo" />
          </div>
          <div className="logo ">
            <img src={require('./images/logo-paystack.png')} alt="logo" />
          </div>
        </div>
      </section>

      <section className="FAQSection" id="FAQSection">
        <div className="FAQHeading">
          Frequently Asked Questions
        </div>

        <Faqs />
      </section>

      <section className="getStartedSection" id="contactUs">
        <div className="getStartedText">
          Contact us
        </div>

        <div className="getStartedContent">
          <div className="getStartedImage">
            <img src={require('./images/contactUs.png')} alt="get started" />
          </div>

          <div className="getStartedInput">
            <div id="dropDownDiv" className="dropdown marginTopNBottom">
              <button className="btn btn-outline formHeight formWidth formBorderRadius paddingTopNBottom noBorderOutline whiteBackground" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {getStartedData.userType}
                <span><i className="bi bi-chevron-down" /></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a id="individual" className="dropdown-item" href="#individual" onClick={() => handleFormInput('userType', 'Individual')}>Individual</a></li>
                <li><a id="business" className="dropdown-item" href="#business" onClick={() => handleFormInput('userType', 'Business')}>Business</a></li>
              </ul>
            </div>

            <div className="marginTopNBottom">
              <input type="text" className="form-control formBorderRadius formHeight formWidth noBorderOutline paddingTopNBottom" id="formGroupExampleInput" placeholder="Name" name="fullname" onChange={handleInputChange} value={getStartedData.fullname} />
            </div>

            <div className="marginTopNBottom">
              <input type="email" className="form-control formBorderRadius formWidth formHeight noBorderOutline paddingTopNBottom" id="exampleFormControlInput1" placeholder="Email address" name="email" onChange={handleInputChange} value={getStartedData.email} />
            </div>

            <div className="marginTopNBottom extraBottomMargin">
              <textarea className="form-control textAreaBorderRadius formWidth textAreaHeight noBorderOutline paddingTopNBottom" id="exampleFormControlTextarea1" rows="3" placeholder="Message" name="message" onChange={handleInputChange} maxLength="250" value={getStartedData.message} />
            </div>

            <div className="">
              <p className="notificationParagraph successP">{mailResponse.success}</p>
              <p className="notificationParagraph errorP">{mailResponse.error}</p>
              <button type="button" className="getStartedButton btn btn-outline noBorderOutline" onClick={handleFormSubmit}>Contact Us</button>
            </div>

            <div className="form-check checkForm">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleCheck('emailPermit')} checked={getStartedData.emailPermit} />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Send me helpful info
              </label>
            </div>
            <div className="terms">
              By clicking “Contact Us”, you agree to Carrot&apos;s
              <br />
              <a href="/agreement">User Agreement</a>
              {/* {' '}
              and
              <a href="#footerSection"> Privacy Policy</a> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewHome;
