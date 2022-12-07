import qs from 'qs';
import * as Helpers from '../../helpers';

export const BALANCE = 'BALANCE';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const LOAD = 'LOAD';
export const LOGOUT = 'LOGOUT';
export const UPDATE_USER = 'UPDATE_USER';
export const RESET = 'RESET';
export const OTP = 'OTP';

export const signin = (emailOrMobile, password, history) => Helpers.api(
  '/user/signin',
  'POST',
  { /* email: emailOrMbbile, */application_id: 1, mobile: emailOrMobile, password },
  {
    success: response => setTimeout(() => {
      Helpers.token.set(response.data.token);
      Helpers.token.set(1, 'application:id');
      const queryString = qs.parse(window.location.search.slice(1));
      if (Helpers.token.get('user:token') && queryString && queryString.redirect) {
        window.location = queryString.redirect;
      } else {
        history.push('/dashboard');
      }
    }, 500),
  },
  { error: ERROR, loading: LOADING, responder: SIGNIN }
);

export const signup = (email, mobile, history) => Helpers.api(
  '/user',
  'POST',
  { application_id: 1, email, mobile },
  {
    success: response => setTimeout(() => {
      if (response && response.data && response.data.redirect) {
        window.location = response.data.redirect;
      } else {
        history.push('/signin');
      }
    }, 500),
  },
  { error: ERROR, loading: LOADING, responder: SIGNUP }
);

export const logout = history => dispatch => {
  Helpers.token.remove();

  if (window.groove.widget) window.groove.widget.logout();

  dispatch({
    payload: null,
    type: LOGOUT,
  });
  history.push('/signin');
};

export const load = (success, error, user_id) => Helpers.api(
  user_id ? `/user/${user_id}` : '/user',
  'GET',
  null,
  { error, success },
  { error: ERROR, loading: LOADING, responder: user_id ? '' : LOAD }
);

export const updateUser = (data, callback) => Helpers.api(
  '/user',
  'PUT',
  { data },
  { ...callback },
  { error: ERROR, loading: LOADING, responder: UPDATE_USER }
);

export const reset = (data, reset_code, success, error) => Helpers.api(
  '/user',
  'PUT',
  { data, reset_code },
  { error, success },
  { error: ERROR, loading: LOADING, responder: RESET }
);

export const otp = (mobile, success, error) => Helpers.api(
  '/user/otp',
  'POST',
  { mobile },
  { error, success },
  { error: ERROR, loading: LOADING, responder: OTP }
);
