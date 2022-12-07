import { combineReducers } from 'redux';

import loan from './loan';
import portfolio from './portfolio';
import user from './user';
import repayment from './repayment';
import withdrawal from './withdrawal';
import contact from './contact';

export default combineReducers({
  contact,
  loan,
  portfolio,
  repayment,
  user,
  withdrawal,
});
