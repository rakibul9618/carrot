import React from 'react';
import sha256 from 'sha256';

import { Empty } from '../../../components';

import * as Helpers from '../../../helpers';

import refresh from '../../../assets/images/refresh.png';

const RepaymentTable = ({ data, updateLock, getSingleRepayment }) => (data.length === 0 ? <Empty />
  : (
    <table id="datatable">
      <thead>
        <tr>
          {process.env.NODE_ENV === 'development' && <th>Repayment ID</th>}
          {process.env.NODE_ENV === 'development' && <th>Loan ID</th>}
          <th>Repayment Ref.</th>
          {/* repayment.id */}
          <th>Loan Ref.</th>
          {/* loan.id */}
          <th>Application.</th>
          {/* loan.id */}
          <th>Principal (% of total)</th>
          {/* repayment.principal */}
          <th>Interest</th>
          {/* repayment.principal */}
          <th>Rate</th>
          {/* repayment.rate */}
          <th>Initiated By</th>
          {/* repayment.triggered */}
          <th>Made via</th>
          {/* loan.id */}
          <th>Payment Reference</th>
          {/* repayment.reference */}
          <th>Refresh</th>
          {/* Unlock your loan */}
          <th>Date</th>
          {/* repayment.date */}
        </tr>
      </thead>
      <tbody>
        {
        data && data.map((repayment, i) => {
          const principal = parseFloat(repayment.loan.loanPrincipal);
          return (
            <tr key={i}>
              {process.env.NODE_ENV === 'development' && <td>{repayment.repayment_id}</td>}
              {process.env.NODE_ENV === 'development' && <td>{repayment.loan.loan_id}</td>}
              <td title={sha256(repayment.repayment_id)}>{sha256(repayment.repayment_id).substr(0, 8)}</td>
              <td title={sha256(repayment.loan.loan_id)}>{sha256(repayment.loan.loan_id).substr(0, 8)}</td>
              <td>{repayment.application.applicationName}</td>
              <td>
                $
                {repayment.principal / 100}
                {' '}
                (
                {(repayment.principal <= 0 ? 0 : 100 * (repayment.principal / principal)).toFixed(2)}
                %)
              </td>
              <td>
                $
                {(parseInt(repayment.interest, 10) / 100).toFixed(2)}
              </td>
              <td>{repayment.rate}</td>
              <td>{repayment.triggered === 'user' ? 'You' : repayment.triggered === 'application' ? repayment.application.applicationName : 'Carrot'}</td>
              <td>{repayment.processor.processorName}</td>
              <td>{repayment.reference}</td>
              <td>
                {
                  !repayment.recorded
                    ? (
                      <img
                        className="icon refresh"
                        onClick={() => {
                          updateLock(repayment.repayment_id, res => {
                            getSingleRepayment(repayment.repayment_id);
                            Helpers.notification.success(res.message);
                          }, res => {
                            Helpers.notification.error(res.message);
                          });
                        }}
                        src={refresh}
                        alt="Refresh"
                      />
                    )
                    : 'N/A'
                }
              </td>
              <td>{repayment.date}</td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  )
);

export default RepaymentTable;
