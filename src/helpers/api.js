import axiosLib from 'axios';

import token from './token';

let axios = axiosLib;
const api = (url, method, data, { success, error }, actionTypes) => (dispatch, mockAxios) => {
  // eslint-disable-next-line no-console
  // console.log(`-- ${method} request made to ${url}`);

  const {
    responder, loading, error: errorConstant, report,
  } = actionTypes;

  if (mockAxios.get) axios = mockAxios;

  dispatch({
    payload: url,
    type: loading,
  });
  axios.defaults.headers.common.Authorization = `Bearer ${token.get()}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  return axios[method.toLowerCase()](`${process.env.REACT_APP_BASE_URL}${url}`, data)
    .then(res => {
      dispatch({
        payload: url,
        type: loading,
      });
      dispatch({
        payload: res.data,
        type: responder,
      });

      if (typeof success === 'function' && report !== false) success(res.data, dispatch);

      return true;
    }).catch(e => {
      dispatch({
        payload: url,
        type: loading,
      });
      dispatch({
        errorObj: e,
        payload: e.response && e.response.data,
        type: errorConstant,
      });

      if (typeof error === 'function' && report !== false) error(e.response && e.response.data, dispatch);

      if (e.response && e.response.status === 401) {
        token.remove();
        window.location = '/signin';
      }

      return false;
    });
};

export default api;
