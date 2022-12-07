import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';

import baseRoutes from './base';

import { PrivateRoute } from '../components';
import * as Actions from '../store/actions';
import * as Helpers from '../helpers';

class Routes extends Component {
  state = {
    privateRoutes: null,
    publicRoutes: null,
  };

  constructor() {
    super();
    this.setRoutes(true);
  }

  componentDidMount() {
    const { load } = this.props;
    if (
      Helpers.token.get('user:token')
      && baseRoutes.private.some(route => route.path === window.location.pathname)
    ) {
      load();
    }
  }

  componentDidCatch(...args) {
    // eslint-disable-next-line no-console
    console.log('An error occured', args);
  }

  component = route => connect(state => state, Actions)(route.component);

  setRoutes = firstMount => {
    const state = {
      privateRoutes: baseRoutes.private.map(route => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={this.component(route)}
        />
      )),
      publicRoutes: baseRoutes.public.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={this.component(route)}
        />
      )),
    };
    if (firstMount) {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state = state;
    } else {
      this.setState(state);
    }
  }

  render() {
    const { privateRoutes, publicRoutes } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          {publicRoutes}
          {privateRoutes}
          <Route exact={false} path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => state, Actions)(Routes);
