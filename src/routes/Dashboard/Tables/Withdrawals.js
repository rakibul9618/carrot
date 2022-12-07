import React from 'react';
import sha256 from 'sha256';

import { Empty } from '../../../components';

const WithdrawalTable = ({ data }) => (data.length === 0 ? <Empty />
  : (
    <table id="datatable">
      <thead>
        <tr>
          <th>Status</th>
          {/* withdrawal.status */}
          <th title="Withdrawal Reference">Withdrawal Ref.</th>
          {/* withdrawal.id */}
          <th title="Loan Reference">Loan Ref.</th>
          {/* withdrawal.loan_id */}
          <th>Amount</th>
          {/* withdrawal.amount */}
          <th>Requested Currency</th>
          {/* withdrawal.requestedCurrency */}
          <th>Rate</th>
          {/* withdrawal.rate */}
          <th>Made via</th>
          {/* withdrawal.processor.processorName */}
          <th>Date</th>
          {/* withdrawal.date */}
        </tr>
      </thead>
      <tbody>
        {
        data && data.map((withdrawal, i) => (
          <tr key={i}>
            <td>
              <div className="status">
                <div className={withdrawal.withdrawalStatus}>
                  {withdrawal.withdrawalStatus.substr(0, 1).toUpperCase()}
                  {withdrawal.withdrawalStatus.substr(1)}
                </div>
              </div>
            </td>
            <td title={sha256(withdrawal.withdrawal_id)}>{sha256(withdrawal.withdrawal_id).substr(0, 8)}</td>
            <td title={sha256(withdrawal.loan_id)}>{sha256(withdrawal.loan_id).substr(0, 8)}</td>
            <td>
              $
              {withdrawal.amount / 100}
            </td>
            <td>{withdrawal.requestedCurrency}</td>
            <td>{withdrawal.rate}</td>
            <td>{withdrawal.processor.processorName}</td>
            <td>{withdrawal.pending}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
);

export default WithdrawalTable;
