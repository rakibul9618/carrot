import React from 'react';
import { Link } from 'react-router-dom';
import sha256 from 'sha256';

import { Empty } from '../../../components';

import * as Helpers from '../../../helpers';

import refresh from '../../../assets/images/refresh.png';
import cancel from '../../../assets/images/error.png';
import addCardImg from '../../../assets/images/addCard.png';

const LoanTable = ({
  data, getSingleLoan, cancelLoan, user: { loading },
}) => (data.length === 0 ? <Empty /> : (
  <table id="datatable">
    <thead>
      <tr>
        {process.env.NODE_ENV === 'development' && <th>Loan ID</th>}
        {/* loan.loan_id */}
        <th>Status</th>
        {/* loan.loanStatus */}
        <th>Reference</th>
        {/* sha256(loan_id) */}
        <th>Principal</th>
        {/* loan.principal */}
        <th>Interest</th>
        {/* loan.interest */}
        <th>Repayment (Total/%)</th>
        {/* loan.repayment[].amount / loan.amount */}
        {/* loan.application_loan_id */}
        <th>Application</th>
        {/* loan.application.name */}
        <th>Date</th>
        {/* loan.requested */}
        <th>Repay</th>
        {/* repay button */}
        <th>Refresh</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
      {
        data.length > 0 && data.map((loan, i) => {
          const debt = parseInt(loan.principal, 10) - loan.totalRepaid;
          return (
            <tr key={i}>
              {process.env.NODE_ENV === 'development' && <td>{loan.loan_id}</td>}
              <td>
                <div className="status" title={`${loan.loanStatus.substr(0, 1).toUpperCase()}${loan.loanStatus.substr(1)}`}>
                  <div className={loan.loanStatus}>
                    {loan.loanStatus.substr(0, 1).toUpperCase()}
                    {loan.loanStatus.substr(1)}
                  </div>
                </div>
              </td>
              <td title={sha256(loan.loan_id)}>{sha256(loan.loan_id).substr(0, 8)}</td>
              <td>
                $
                {loan.principal / 100}
              </td>
              <td>
                {loan.interest}
                %
              </td>
              <td title={`$${loan.totalRepaid / 100} (${(((loan.totalRepaid / loan.principal) * 100) || 0).toFixed(2)}%)`}>
                $
                {loan.totalRepaid / 100}
                {' '}
                (
                {(((loan.totalRepaid / loan.principal) * 100) || 0).toFixed(2)}
                %)
              </td>
              <td>{loan.application.name}</td>
              <td title={loan[loan.loanStatus]}>{loan[loan.loanStatus]}</td>
              <td>
                {
                  debt !== 0 && (loan.loanStatus !== 'rejected' && loan.loanStatus !== 'cancelled')
                    ? (
                      <Link to={{
                        pathname: '/repay',
                        query: { amount: (debt / 100) + ((6 / 100) * (debt / 100)), loanID: loan.loan_id },
                      }}
                      >
                        <img className="icon zls" src={addCardImg} alt="Pay" />
                      </Link>
                    ) : 'N/A'
                }
              </td>
              {/*
                This button is used to call PUT /lock
                on this row if it has repayment.recorded = '0'
                and check for liquidation via GET /liquidate/:application_loan_id
                on only loan.loanStatus = 'disbursed'
              */}
              <td><img className={`icon refresh${loading.some(item => item === `/loan/${loan.loan_id}`) ? ' loading' : ''}`} onClick={() => getSingleLoan(loan.loan_id)} src={refresh} alt="Refresh" /></td>
              <td title={loan.cancelled}>
                {
                  loan.loanStatus === 'cancelled'
                    ? loan.cancelled
                    : loan.loanStatus === 'requested'
                      ? (
                        <img
                          className="icon refresh"
                          onClick={() => {
                            cancelLoan(loan.loan_id, res => {
                              getSingleLoan(loan.loan_id);
                              Helpers.notification.success(res.message);
                            }, res => {
                              Helpers.notification.error(res.message);
                            });
                          }}
                          src={cancel}
                          alt="Cancel"
                        />
                      )
                      : 'N/A'
                  }
              </td>
            </tr>
          );
        })
      }
    </tbody>
  </table>
));

export default LoanTable;
