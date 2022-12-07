import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

class Menu extends Component {
 out = () => {
   const { logout, history } = this.props;
   logout(history);
 }

 render() {
   const { menu } = this.props;
   return (
     <div id="menu" style={menu}>
       <span className="show-sm" style={{ color: '#000', fontSize: 13, fontWeight: 'bolder' }}>x</span>
       <img id="logo" className="show-sm" src={logo} alt="Carrot Logo" />
       <div className="active-menu">Dashboard</div>
       {/* <div>Apps</div> */}
       <div><Link to="/faqs">Help</Link></div>
       <div><Link to="/forgot">Password</Link></div>
       <div id="logout" onClick={this.out}>Log Out</div>
     </div>
   );
 }
}

export default Menu;
