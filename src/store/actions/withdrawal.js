import * as Helpers from '../../helpers';

import { LOADING, ERROR } from './user';

export const PROCESSOR_GET = 'PROCESSOR_GET';
export const WITHDRAWAL_GET = 'WITHDRAWAL_GET';
export const WITHDRAWAL_VERIFY = 'WITHDRAWAL_VERIFY';
export const WITHDRAW = 'WITHDRAW';
export const WITHDRAWAL_SET_OFFSET = 'WITHDRAWAL_SET_OFFSET';

export const getProcessors = () => Helpers.api(
  '/processors',
  'GET',
  null,
  {},
  { error: ERROR, loading: LOADING, responder: PROCESSOR_GET }
);

export const setWithdrawalOffset = (limit, offset) => dispatch => dispatch({ payload: { limit, offset }, type: WITHDRAWAL_SET_OFFSET });

export const getWithdrawals = (limit, offset, success) => Helpers.api(
  `/withdrawal?limit=${limit}&offset=${offset}`,
  'GET',
  null,
  {
    success: (res, dispatch) => {
      // If the length of returned data is less
      // than the limit then don't update
      if (res.data.withdrawals.length === limit) {
        setWithdrawalOffset(limit, offset)(dispatch);
      }

      if (success) success(res, dispatch);
    },
  },
  { error: ERROR, loading: LOADING, responder: WITHDRAWAL_GET }
);

export const verifyWithdrawalDetails = (details, processor_id, success, error) => Helpers.api(
  '/withdrawal/verify',
  'POST',
  { details, processor_id },
  { error, success },
  { error: ERROR, loading: LOADING, responder: WITHDRAWAL_VERIFY }
);

export const withdraw = (amount, details, processor_id, success) => Helpers.api(
  '/withdrawal',
  'POST',
  { amount, details, processor_id },
  { success },
  { error: ERROR, loading: LOADING, responder: WITHDRAW }
);
