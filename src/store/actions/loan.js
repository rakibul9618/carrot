import * as Helpers from '../../helpers';

import { ERROR, LOADING } from './user';
// import store from '..';

export const LOAN_CREATE = 'LOAN_CREATE';
export const LOAN_GET = 'LOAN_GET';
export const LOAN_GET_SINGLE = 'LOAN_GET_SINGLE';
export const LOAN_SET_OFFSET = 'LOAN_SET_OFFSET';
export const LOAN_CANCEL = 'LOAN_SET_OFFSET';
export const LOAN_LOADING = 'LOAN_LOADING';

export const requestLoan = (applicationID, amount, success, error) => Helpers.api(
  '/loan',
  'POST',
  { amount, application_id: applicationID },
  { error, success },
  { error: ERROR, loading: LOAN_LOADING, responder: LOAN_CREATE }
);

export const setLoanOffset = (limit, offset) => dispatch => dispatch({ payload: { limit, offset }, type: LOAN_SET_OFFSET });

export const getLoans = (limit, offset, success) => Helpers.api(
  `/loan?limit=${limit}&offset=${offset}`,
  'GET',
  null,
  {
    success: (res, dispatch) => {
      // If the length of returned data is less
      // than the limit then don't update
      if (res.data.loans.length === limit) {
        setLoanOffset(limit, offset)(dispatch);
      }

      if (success) success(res, dispatch);
    },
  },
  {
    error: ERROR, loading: LOADING, report: false, responder: LOAN_GET,
  }
);

export const getSingleLoan = loan_id => Helpers.api(
  `/loan/${loan_id}`,
  'GET',
  null,
  {},
  { error: ERROR, loading: LOADING, responder: LOAN_GET_SINGLE }
);

export const cancelLoan = (loan_id, success, error) => Helpers.api(
  '/loan',
  'PUT',
  { loan_id },
  { error, success },
  { error: ERROR, loading: LOADING, responder: LOAN_CANCEL }
);
