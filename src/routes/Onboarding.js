import React from 'react';

import { Loading } from '../components';

import * as Helpers from '../helpers';

class Onboarding extends React.Component {
  componentDidMount() {
    const {
      load, history, location, match: { params: { application_id, code } },
    } = this.props;
    const intro = location.query && typeof location.query.intro !== 'undefined'
      ? location.query.intro : false;
    Helpers.token.set(application_id, 'application:id');
    load(response => {
      Helpers.token.set(response.data.token);
      history.push(`/offer${intro ? `?intro=${intro}` : ''}`);
    }, response => {
      if (response && response.data && response.data.token) {
        Helpers.token.set(response.data.token);
        history.push(`/offer${intro ? `?intro=${intro}` : ''}`);
        return Helpers.notification.error(
          'An partial error occurred with your authentication. Check with support.'
        );
      }

      history.push('/signin');
      return Helpers.notification.error(
        'We were unable to authenticate you, try again.'
      );
    }, code);
  }

  render = () => <Loading size="big" />;
}

export default Onboarding;
