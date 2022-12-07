import * as Helpers from '../../helpers';

import { LOADING, ERROR } from './user';

export const PORTFOLIO_GET = 'PORTFOLIO_GET';

export const getPortfolio = applicationID => Helpers.api(
  `/portfolio?application_id=${applicationID}`,
  'GET',
  null,
  {},
  { error: ERROR, loading: LOADING, responder: PORTFOLIO_GET }
);
