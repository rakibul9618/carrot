import React, { Component } from 'react';

import empty from '../assets/images/empty.png';

class Empty extends Component {
  render() {
    return (
      <div id="empty">
        <img src={empty} alt="Empty" />
        <label htmlFor="empty">Nothing to see here yet</label>
      </div>
    );
  }
}

export default Empty;
