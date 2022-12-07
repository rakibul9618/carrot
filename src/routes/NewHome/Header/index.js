import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import blackLogo from '../images/carrotlogoblack.svg';

const hamburger = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="rgba(17, 17, 17, 1)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>;

const times = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="rgba(17, 17, 17, 1)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>;

const Header = () => {
  const [toggleIcon, setToggleIcon] = useState(hamburger);
  const handleClickNav = e => {
    setToggleIcon(e.target.parentElement.classList.contains('collapsed') ? hamburger : times);
  };

  return (
    <div className="app-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={blackLogo} alt="Carrot logo" width="80" height="25" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClickNav}>
          {toggleIcon}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="midNavItem">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#section2">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutSection">About</a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#1">Learn</a> */}
              </li>
            </ul>
          </div>
          <ul className="navbar-nav mb-2 mb-lg-0 paddingRight">
            <li className="nav-item">
              <a className="nav-link" href="/signin">Log in</a>
            </li>
          </ul>
          <div className="navButton noDisplaySm">
            <Link to="/signup"><button type="button" className="btn btn-sm btn-outline noBorderOutline buttonBackground navBtnBorderRadius">Get started</button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
