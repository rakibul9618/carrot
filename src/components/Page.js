import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

class Page extends React.Component {
  componentDidMount() {
    const { title } = this.props;
    document.title = `${title} | Carrot`;
  }

  render() {
    const {
      background, children, footer, header, hasLogo,
    } = this.props;
    return (
      <>
        {header && <div id="header" className="right">{header}</div>}
        <div id="authentication" className={background}>
          {hasLogo && <Link to="/"><img id="logo" src={logo} alt="Carrot Logo" /></Link>}
          <div id="container">{children}</div>
          <div id="footer" className="typography">{footer}</div>
        </div>
      </>
    );
  }
}

Page.defaultProps = {
  hasLogo: true,
};

Page.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  hasLogo: PropTypes.bool,
  header: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Page;
