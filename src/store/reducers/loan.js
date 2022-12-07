import {
  LOAN_GET,
  LOAN_GET_SINGLE,
  LOAN_CREATE,
  LOAN_SET_OFFSET,
  LOAN_LOADING
} from '../actions';

const initialState = {
  all: [],
  loading: [],
  table: {
    limit: 10,
    offset: 0,
  },
};

export default function (state = initialState, action) {
  const { loading } = state;
  const { payload } = action;
  const found = [];

  switch (action.type) {
  case LOAN_LOADING:
    return {
      ...state,
      loading: loading.some(item => item === payload)
        ? loading.filter(item => item !== payload)
        : [...loading, payload],
    };

  case LOAN_CREATE:
    return {
      ...state,
      ...payload,
    };

  case LOAN_GET:
    return {
      ...state,
      // payload.data.loans must come first in the .concat call
      // because it'll always contain newer values
      all: payload.data.loans.concat(state.all).filter(loan => {
        if (found.includes(loan.loan_id)) {
          return false;
        }

        found.push(loan.loan_id);
        return true;
      }).sort((a, b) => parseInt(a.loan_id, 10) < parseInt(b.loan_id, 10)),
    };

  case LOAN_GET_SINGLE:
    return {
      ...state,
      all: state.all.map(single => (single.loan_id === payload.data.loans[0].loan_id ? payload.data.loans[0] : single)),
    };

  case LOAN_SET_OFFSET:
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
