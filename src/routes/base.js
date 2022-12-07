import Signup from './Signup';
import Signin from './Signin';
import Forgot from './Forgot';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Offer from './Offer';
import Onboarding from './Onboarding';
import Repayment from './Repayment';
import Withdrawal from './Withdrawal';
import NewHome from './NewHome';
import Home from './Home/Pages/Homepage';
import Agreement from './Agreement';

import Faqs from './Home/Components/Faqs/Faqs';

const baseRoutes = {
  private: [
    {
      component: Offer,
      exact: true,
      path: '/offer',
    },
    {
      component: Dashboard,
      exact: true,
      path: '/dashboard',
    },
    {
      component: Repayment,
      exact: true,
      path: '/repay',
    },
    {
      component: Withdrawal,
      exact: true,
      path: '/withdrawal',
    },
    {
      component: Forgot,
      exact: true,
      path: '/forgot',
    },
  ],
  public: [
    {
      component: NewHome,
      exact: true,
      path: '/',
    },
    {
      component: Home,
      exact: true,
      path: '/old',
    },
    {
      component: Faqs,
      exact: true,
      path: '/faqs',
    },
    {
      component: Signup,
      exact: true,
      path: '/signup',
    },
    {
      component: Signin,
      exact: true,
      path: '/signin',
    },
    {
      component: NotFound,
      exact: true,
      path: '/404',
    },
    {
      component: Onboarding,
      exact: true,
      path: '/onboarding/:code/:application_id',
    },
    {
      component: Agreement,
      exact: true,
      path: '/agreement',
    },
  ],
};

export default baseRoutes;
