import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { columnns, rows } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {columnns.map((column, i) => <th key={i}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.map((row, i) => <td key={i}>{row}</td>)}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
