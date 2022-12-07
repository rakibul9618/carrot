import {
  PROCESSOR_GET,
  WITHDRAWAL_SET_OFFSET,
  WITHDRAWAL_GET
} from '../actions';

export const initialState = {
  all: [],
  processors: [],
  table: {
    limit: 10,
    offset: 0,
  },
};

export default function (state = initialState, action) {
  const { payload } = action;
  const found = [];

  switch (action.type) {
  case PROCESSOR_GET:
    return {
      ...state,
      processors: payload.data.processors,
    };

  case WITHDRAWAL_GET:
    return {
      ...state,
      // payload.data.loans must come first in the .concat call
      // because it'll always contain newer values
      all: payload.data.withdrawals.concat(state.all).filter(withdrawal => {
        if (found.includes(withdrawal.withdrawal_id)) {
          return false;
        }

        found.push(withdrawal.withdrawal_id);
        return true;
      }).sort((a, b) => parseInt(a.withdrawal_id, 10) < parseInt(b.withdrawal_id, 10)),
    };

  case WITHDRAWAL_SET_OFFSET:
    return {
      ...state,
      table: {
        limit: payload.limit,
        offset: payload.offset,
      },
    };

  default:
    return state;
  }
}
