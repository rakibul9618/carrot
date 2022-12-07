import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import qs from 'qs';

import * as Helpers from '../helpers';

class PrivateRoutes extends Component {
  componentDidMount() {
    if (Helpers.token.get('user:token') && window.groove.widget) {
      const {
        user: {
          email, firstname, lastname, user_id,
        },
      } = this.props;
      window.groove.widget.identifyContact('contact_email', email);
      window.groove.widget.setContact({
        contact_first_name: firstname,
        contact_last_name: lastname,
        contact_user_id: user_id,
      });
    }
    const queryString = qs.parse(window.location.search.slice(1));
    if (Helpers.token.get('user:token') && queryString && queryString.redirect) {
      window.location = queryString.redirect;
    }
  }

  render() {
    const queryString = window.location.search ? window.location.search : '';
    return (
      Helpers.token.get('user:token')
        ? <Route {...this.props} />
        : <Redirect to={`/signin${queryString}`} />
    );
  }
}

export default connect(state => state, null)(PrivateRoutes);
