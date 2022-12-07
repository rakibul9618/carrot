import React, { Component } from 'react';
import PropTypes from 'prop-types';

import loaderImage from '../assets/images/loader.gif';

class Button extends Component {
  render() {
    const {
      children, onClick, size, background, disabled, loading,
    } = this.props;
    return (
      <button
        disabled={loading || disabled}
        className={`typography button ${size} ${background || ''}`}
        onClick={onClick}
      >
        {loading ? <img src={loaderImage} alt="Loading" style={{ height: '70%', width: 'auto' }} /> : children}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['large', 'medium', 'small', '']).isRequired,
};

export default Button;
