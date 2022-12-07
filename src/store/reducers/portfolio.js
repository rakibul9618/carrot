import {
  PORTFOLIO_GET
} from '../actions';

const initialState = {
  all: [],
  amount: 0,
  application: {},
  legal: '0',
  loading: [],
};

export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
  case PORTFOLIO_GET:
    return {
      ...state,
      amount: payload.data.amount,
      application: payload.data.application,
      legal: payload.data.portfoliolegal,
    };

  default:
    return state;
  }
}
