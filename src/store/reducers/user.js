/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
import * as Helpers from '../../helpers';

import {
  ERROR,
  LOADING,
  SIGNIN,
  LOAD
} from '../actions';

export const initialState = {
  application_id: 0,
  balance: '',
  bvn: '',
  card: null,
  email: '',
  firstname: '',
  info: {
    balance: 0,
    debt: 0,
  },
  lastname: '',
  loading: [],
  mobile: '',
  password: '',
  user_id: 0,
};

export default function (state = initialState, action) {
  const { loading } = state;
  const { payload } = action;
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: loading.some(item => item === payload)
        ? loading.filter(item => item !== payload)
        : [...loading, payload],
    };

  case SIGNIN:
    return {
      ...state,
      token: payload.token,
    };

  case ERROR:
    if (payload && payload.data && payload.data.error) {
      payload.data.error.map(err => Helpers.notification.error(err));
    } else if (payload && payload.message) {
      Helpers.notification.error(payload.message);
    } else {
      Helpers.notification.error('Unfortunately we were unable to fetch some data. Try again.');
    }
    return state;

  case LOAD:
    const {
      data: {
        balance,
        bvn,
        card,
        email,
        firstname,
        info,
        lastname,
        mobile,
        password,
        user_id,
      },
    } = payload;
    return {
      ...state,
      balance,
      bvn,
      card,
      email,
      firstname,
      info,
      lastname,
      mobile,
      password,
      user_id,
    };

  default:
    return state;
  }
}
