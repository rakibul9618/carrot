import {
  REPAYMENT_GET,
  REPAYMENT_GET_SINGLE,
  REPAYMENT_SET_OFFSET
} from '../actions';

export const initialState = {
  all: [],
  table: {
    limit: 10,
    offset: 0,
  },
};

export default function (state = initialState, action) {
  const { payload } = action;
  const found = [];

  switch (action.type) {
  case REPAYMENT_GET:
    return {
      ...state,
      // payload.data.loans must come first in the .concat call
      // because it'll always contain newer values
      all: payload.data.repayments.concat(state.all).filter(repayment => {
        if (found.includes(repayment.repayment_id)) {
          return false;
        }

        found.push(repayment.repayment_id);
        return true;
      }).sort((a, b) => parseInt(a.repayment_id, 10) < parseInt(b.repayment_id, 10)),
    };

  case REPAYMENT_GET_SINGLE:
    return {
      ...state,
      all: state.all.map(single => (single.repayment_id === payload.data.repayments[0].repayment_id ? payload.data.repayments[0] : single)),
    };

  case REPAYMENT_SET_OFFSET:
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
