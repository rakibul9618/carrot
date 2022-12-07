import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button';

import successful from '../assets/images/successful.png';
import nextImg from '../assets/images/next.png';
import logo from '../assets/images/logo.png';

class Successful extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <>
        <div id="application-successful">
          <img id="logo" src={logo} alt="Carrot Logo" />
          <img id="successful-logo" src={successful} alt={`${title}\n${title}`} />
          <div id="application-title">{title}</div>
          <div id="application-subtitle">{subtitle}</div>
          <div id="application-button" className="full-button">
            <Link to="/dashboard">
              <Button size="large" background="white" onClick={() => null}>
                Go to Dashboard
                <img src={nextImg} className="next-image" alt="Next" />
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

Successful.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Successful;
