import React from 'react';
import { Link } from 'react-router-dom';
import { PaystackConsumer } from 'react-paystack';
import sha256 from 'sha256';
import moment from 'moment';
// import { CSVLink } from 'react-csv';

import Loans from './Tables/Loans';
import Repayments from './Tables/Repayments';
import Withdrawals from './Tables/Withdrawals';

import { Header as BlackHeader } from './Header/Header';

import {
  Menu, Button, Tabs, Header
} from '../../components';

import refresh from '../../assets/images/refresh.png';
import pay from '../../assets/images/pay.png';
import apply from '../../assets/images/apply.png';
import addCardImg from '../../assets/images/addCard.png';
import convert from '../../assets/images/convert.png';

import * as Helpers from '../../helpers';

class Dashboard extends React.Component {
  state = {
    activeTab: 0,
    menu: false,
    open: false,
    running: false,
  };

  componentDidMount() {
    document.body.classList.add('no-overflow');
    document.body.classList.remove('overflow');

    document.title = 'Dashboard | Carrot';

    this.refresh();
    // setTimeout(this.refresh, 5000);

    const {
      history: { location },
    } = this.props;
    if (location.state && location.state.trigger === 'add-card') {
      this.toggle();
    }
  }

  isNearBottom = el => el.scrollTop + el.clientHeight >= el.scrollHeight - 50;

  onScroll = () => {
    const divElement = document.getElementById('content');
    if (this.isNearBottom(divElement)) {
      const { activeTab, running } = this.state;
      const {
        getLoans, getRepayments, getWithdrawals,
        user: { loading },
        loan: { all: allLoans, table: { limit: loanLimit, offset: loanOffset } },
        repayment: { all: allRepayments, table: { limit: repaymentLimit, offset: repaymentOffset } },
        withdrawal: { all: allWithdrawals, table: { limit: withdrawalLimit, offset: withdrawalOffset } },
      } = this.props;

      if (
        running
        || loading.some(url => url === `/loan?limit=${loanLimit}&offset=${loanOffset}`)
        || loading.some(url => url === `/repayment?limit=${repaymentLimit}&offset=${repaymentOffset}`)
        || loading.some(url => url === `/withdrawal?limit=${withdrawalLimit}&offset=${withdrawalOffset}`)
      ) {
        return;
      }
      this.setState({ running: true });
      if (activeTab === 0) {
        getLoans(
          loanLimit,
          Math.min(allLoans.length, loanOffset + loanLimit),
          () => this.setState({ running: false })
        );
      } else if (activeTab === 1) {
        getRepayments(
          repaymentLimit,
          Math.min(allRepayments.length, repaymentOffset + repaymentLimit),
          () => this.setState({ running: false })
        );
      } else if (activeTab === 2) {
        getWithdrawals(
          withdrawalLimit,
          Math.min(allWithdrawals.length, withdrawalOffset + withdrawalLimit),
          () => this.setState({ running: false })
        );
      }
    }
  };

  noop = () => null;

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  success = data => {
    const { addCard, load, history: { push, location } } = this.props;
    this.toggle();
    addCard(data.reference, response => {
      Helpers.notification.success(response.message);
      load(() => {
        if (location.state && location.state.trigger === 'add-card') {
          push('/withdrawal');
        }
      });
    });
  }

  close = () => {
    this.setState({ open: false });
  }

  refresh = () => {
    const {
      load, getLoans, getRepayments, getWithdrawals, getPortfolio,
      loan: { table: { limit: loanLimit, offset: loanOffset } },
      repayment: { table: { limit: repaymentLimit, offset: repaymentOffset } },
      withdrawal: { table: { limit: withdrawalLimit, offset: withdrawalOffset } },
    } = this.props;
    load();
    getLoans(loanLimit, loanOffset);
    getRepayments(repaymentLimit, repaymentOffset);
    getWithdrawals(withdrawalLimit, withdrawalOffset);
    getPortfolio(1);
  }

  toggleMenu = () => {
    const { menu } = this.state;
    this.setState({ menu: !menu });
  }

  // spreadArray = compactArr => {
  //   const spreadArr = [...compactArr];
  //   return spreadArr.map(obj => {
  //     const newObj = { ...obj };
  //     const keys = Object.keys(obj);
  //     keys.forEach(key => {
  //       if (typeof obj[key] === 'object' && obj[key] !== null) {
  //         const innerKeys = Object.keys(obj[key]);
  //         innerKeys.forEach(innerKey => {
  //           newObj[innerKey] = obj[key][innerKey];
  //         });
  //         delete newObj[key];
  //       }
  //     });
  //     return { ...newObj };
  //   });
  // }

  render() {
    // const { activeTab, open, menu } = this.state;
    const { open, menu } = this.state;
    const {
      user: userData,
      user: {
        email, card: userCard, user_id, info, loading,
      },
      loan: { all: allLoans },
      repayment: { all: allRepayments },
      withdrawal: { all: allWithdrawals },
      portfolio,
    } = this.props;

    let credit = portfolio.amount;
    credit = credit < 0 ? 0 : credit;

    let day = '';
    let month = '';
    let year = '';
    if (info.repayment && info.repayment.date) {
      let date = new Date(info.repayment.date);
      if (date.getTime() <= new Date().getTime()) {
        date = moment(date, 'MM/DD/YYYY').add(1, 'M').toDate();
      }
      day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      year = (`${date.getFullYear()}`).substr(2);
    }

    return (
      <>
        <div id="rates">
          <span>
            Buy Rate:
            &nbsp;&nbsp;
            $1
            <img className="icon tiny" src={convert} alt="Conversion" />
            {'\u20A6'}
            {(userData && userData.info.rates && userData.info.rates.buy) || 0}
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            Sell Rate:
            &nbsp;&nbsp;
            $1
            <img className="icon tiny" src={convert} alt="Conversion" />
            {'\u20A6'}
            {(userData && userData.info.rates && userData.info.rates.sell) || 0}
          </span>
        </div>
        <Header {...this.props} user={userData} toggleMenu={this.toggleMenu} />
        <BlackHeader menu={menu} toggleMenu={this.toggleMenu} />
        <div id="dashboard">
          <Menu active="Dashboard" {...this.props} />
          <div id="content" onScroll={this.onScroll}>
            <div id="info">
              <div className="detail">
                <div title={`$${Helpers.formatMoney(info.balance / 100 || 0)}`}>
                  $
                  {Helpers.formatMoney(info.balance / 100 || 0)}
                </div>
                <div className="typography">Wallet Balance</div>
              </div>
              <div className="detail">
                <div title={`$${Helpers.formatMoney(allWithdrawals.length === 0 && info.balance <= 0 ? 0 : info.repayment ? info.repayment.minimum / 100 : 0)}`}>
                  $
                  {Helpers.formatMoney(allWithdrawals.length === 0 && info.balance <= 0 ? 0 : info.repayment ? (info.repayment.minimum / 100) === 1 ? 0 : info.repayment.minimum / 100 : 0)}
                </div>
                <div className="typography">Minimum Payment Due</div>
              </div>
              <div className="detail">
                <div title={allWithdrawals.length === 0 && info.balance <= 0 ? '-' : info.repayment ? `${day}.${month}.${year}` : '-'}>{allWithdrawals.length === 0 && info.balance <= 0 ? '-' : info.repayment ? `${day}.${month}.${year}` : '-'}</div>
                <div className="typography">Next Payment Date</div>
              </div>
              <div className="detail">
                <div title={`$${Helpers.formatMoney(allWithdrawals.length === 0 && info.balance <= 0 ? 0 : info.debt ? info.debt / 100 : 0)}`}>
                  $
                  {Helpers.formatMoney(allWithdrawals.length === 0 && info.balance <= 0 ? 0 : info.debt ? info.debt / 100 : 0)}
                </div>
                <div className="typography">Total Amount Due</div>
              </div>
              <div className="detail">
                <div title={`$${Helpers.formatMoney(credit / 100)}`}>
                  $
                  {Helpers.formatMoney(credit / 100)}
                </div>
                <div className="typography">Total Available Credit</div>
              </div>
            </div>
            <div id="actions">
              <div className="button-group overflow">
                <Link to={{
                  pathname: '/offer',
                  query: { intro: false },
                }}
                >
                  <Button background="light" size="" onClick={this.noop}>
                    <img className="icon zls" src={apply} alt="Apply" />
                    Apply
                  </Button>
                </Link>
                <Link to="/withdrawal">
                  <Button background="light" size="" onClick={this.noop}>
                    <img className="icon zls" src={addCardImg} alt="Withdraw" />
                    Withdraw
                  </Button>
                </Link>
                <Button background="light" size="" onClick={this.refresh}>
                  <img
                    className={`icon zls${loading.some(url => url === '/user' || url === '/portfolio?application_id=1')
                      ? ' loading' : ''}`}
                    src={refresh}
                    alt="Refresh"
                  />
                  Refresh
                </Button>
                <Link to={{
                  pathname: '/repay',
                  query: { amount: info.debt / 100, loanID: 0 },
                }}
                >
                  <Button background="light" size="" onClick={this.refresh}>
                    <img className="icon zls" src={pay} alt="Refresh" />
                    Repay
                  </Button>
                </Link>
                <Button background="light" size="" onClick={this.toggle}>
                  <img className="icon zls" src={addCardImg} alt="Add Card" />
                  {
                    !userCard ? 'Add' : 'Change'
                  }
                  {' '}
                  Card
                </Button>

                {/* <CSVLink
                  // data={activeTab === 0 ? allLoans : activeTab === 1 ? allRepayments : activeTab === 2 ? allWithdrawals : allLoans}
                  data={activeTab === 0 ? this.spreadArray(allLoans) : activeTab === 1 ? this.spreadArray(allRepayments) : activeTab === 2 ? this.spreadArray(allWithdrawals) : this.spreadArray(allLoans)}
                  filename={`user_${user_id}_${activeTab === 0 ? 'loans' : activeTab === 1 ? 'repayments' : activeTab === 2 ? 'withdrawals' : 'loans'}.csv`}
                >
                  <Button background="light" size="">
                    <img
                      className="icon zls"
                      src={pay}
                      alt="Export CSV"
                    />
                    Export CSV
                  </Button>
                </CSVLink> */}

              </div>
            </div>
            <div className="infoTypography">
              <div className="typography">
                All Transactions are done in
                {' '}
                <span className="dark">USD</span>
              </div>
              <div className="typography">
                Interest Rate is
                {' '}
                <span className="dark">{(userData && userData.info.rates && userData.info.rates.interest) || 0}</span>
                <span className="dark">%</span>
              </div>
            </div>

            <Tabs
              // eslint-disable-next-line no-shadow
              current={activeTab => this.setState({ activeTab })}
              tabs={[
                { component: <Loans {...this.props} data={allLoans} key={0} />, title: 'Loans' },
                { component: <Repayments {...this.props} data={allRepayments} key={1} />, title: 'Repayments' },
                { component: <Withdrawals {...this.props} data={allWithdrawals} key={2} />, title: 'Withdrawals' },
              ]}
            />
          </div>

          {
            open
            && (
              <PaystackConsumer
                metadata={{ action: 'add-card', id: sha256(`${user_id}`) }}
                publicKey={info.publicKey}
                amount={5000}
                email={process.env.NODE_ENV === 'development' ? 'tech@carrotcredit.com' : email}
                channels={['card']}
                text="Carrot-Paystack"
                onSuccess={this.success}
                onClose={this.close}
              >
                {({ initializePayment }) => <>{initializePayment()}</>}
              </PaystackConsumer>
            )
          }
        </div>
      </>
    );
  }
}

export default Dashboard;
