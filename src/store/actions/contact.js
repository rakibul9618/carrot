import * as Helpers from '../../helpers';
import { ERROR, LOADING } from './user';

export const CONTACT = 'CONTACT';

export const contact = (email, emailPermit, fullname, message, userType, success, error) => Helpers.api(
  '/admin/contact',
  'POST',
  {
    email,
    emailPermit,
    fullname,
    message,
    userType,
  },
  { error, success },
  { error: ERROR, loading: LOADING, responder: CONTACT }
);
