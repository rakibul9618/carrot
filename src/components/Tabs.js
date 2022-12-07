import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    active: 0,
  };

  change = active => () => {
    const { current } = this.props;
    this.setState({
      active,
    }, () => current(active));
  };

  render() {
    const { tabs } = this.props;
    const { active } = this.state;
    return (
      <div className="tabs-container">
        <div className="tabs overflow">
          {
            tabs.map((item, i) => (
              <div
                key={i}
                onClick={this.change(i)}
                className={`tab${active === i ? ' active-tab' : ' '}`}
              >
                {item.title}
              </div>
            ))
          }
        </div>
        <div className="tabs-content overflow">
          {tabs.map((item, i) => active === i && item.component)}
        </div>
      </div>
    );
  }
}

Tabs.propType = {
  active: PropTypes.number.isRequired,
  current: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
  }).isRequired).isRequired,
};

export default Tabs;
