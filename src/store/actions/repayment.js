import * as Helpers from '../../helpers';

import { LOADING, ERROR } from './user';

export const REPAYMENT_GET = 'REPAYMENT_GET';
export const REPAYMENT_GET_SINGLE = 'REPAYMENT_GET_SINGLE';
export const REPAYMENT_RECORD = 'REPAYMENT_RECORD';
export const REPAYMENT_ADD_CARD = 'REPAYMENT_ADD_CARD';
export const REPAYMENT_SET_OFFSET = 'REPAYMENT_SET_OFFSET';
export const REPAYMENT_UPDATE_LOCK = 'REPAYMENT_UPDATE_LOCK';

export const recordRepayment = (reference, loan_id, success) => Helpers.api(
  '/repayment',
  'POST',
  { loan_id, reference },
  { success },
  { error: ERROR, loading: LOADING, responder: REPAYMENT_RECORD }
);

export const addCard = (reference, success) => Helpers.api(
  '/repayment/card',
  'POST',
  { reference },
  { success },
  { error: ERROR, loading: LOADING, responder: REPAYMENT_ADD_CARD }
);

export const updateLock = (repayment_id, success, error) => Helpers.api(
  '/repayment/unlock',
  'POST',
  { repayment_id },
  { error, success },
  { error: ERROR, loading: LOADING, responder: REPAYMENT_UPDATE_LOCK }
);

export const setRepaymentOffset = (limit, offset) => dispatch => dispatch({ payload: { limit, offset }, type: REPAYMENT_SET_OFFSET });

export const getRepayments = (limit, offset) => Helpers.api(
  `/repayment?limit=${limit}&offset=${offset}`,
  'GET',
  null,
  {
    success: (res, dispatch, success) => {
      // If the length of returned data is less
      // than the limit then don't update
      if (res.data.repayments.length === limit) {
        setRepaymentOffset(limit, offset)(dispatch);
      }

      if (success) success(res, dispatch);
    },
  },
  { error: ERROR, loading: LOADING, responder: REPAYMENT_GET }
);

export const getSingleRepayment = (repayment_id, success, error) => Helpers.api(
  `/repayment/${repayment_id}`,
  'GET',
  null,
  { error, success },
  { error: ERROR, loading: LOADING, responder: REPAYMENT_GET_SINGLE }
);
