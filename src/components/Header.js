import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import logoWhite from '../assets/images/logo-white.png';
// import notification from '../assets/images/notification.png';
// import arrowDown from '../assets/images/arrowDown.png';
// import menu from '../assets/images/menu.png';
// import HeaderFaq from '../routes/Home/Components/Common/Header/Header';

class Header extends Component {
  render() {
    const {
      mini,
      user,
      headerColor,
      toggleMenu,
    } = this.props;
    if (mini) {
      return (
        <div id="header" style={{ color: '#FFF' }}>
          <Link to="/">
            <img id="logo" src={!headerColor || headerColor === 'white' ? logoWhite : logo} alt="Carrot Logo" />
          </Link>
        </div>
      );
    }

    return (
      <div id="header">
        <Link to="/"><img id="logo" src={logo} alt="Carrot Logo" /></Link>
        <div className="right">
          {/* <img className="icon medium" src={notification} alt="Notification" /> */}
          <div className="user" onClick={toggleMenu}>
            {user && user.firstname ? user.firstname.substr(0, 1) : <>.</>}
            {user && user.lastname ? user.lastname.substr(0, 1) : <>.</>}
          </div>
          {/* <img className="icon small" src={arrowDown} alt="Arrow Down" /> */}
          {/* <img id="menu-button" className="icon medium" src={menu} alt="Arrow Down" /> */}
          {/* <HeaderFaq /> */}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  headerColor: PropTypes.string,
  mini: PropTypes.bool,
};

export default Header;
