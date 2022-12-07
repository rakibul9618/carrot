import React, { Component } from 'react';
import PropTypes from 'prop-types';

import loading from '../assets/images/loading.gif';

class Loading extends Component {
  render() {
    const { size } = this.props;
    if (size === 'big') {
      return (
        <div id="loading"><img src={loading} alt="Loading" /></div>
      );
    }
    return <>Loading</>;
  }
}

Loading.props = {
  size: PropTypes.string.isRequired,
};

export default Loading;
