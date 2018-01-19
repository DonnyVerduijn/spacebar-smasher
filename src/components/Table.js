import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ children, rows, onClick }) => {
  // take the keys from the first row as columns
  const columnKeys = Object.keys(rows[0]);

  return (
    <table className="Table">
      {rows.map((row, rowIndex) => {
        // take a row key from id or index
        const rowKey = row.id ? row.id : rowIndex;
        return (
          <tr
            key={rowKey}
            className="Row"
            onClick={() => {
              return onClick(row);
            }}
          >
            {columnKeys.map((key, index) => {
              return <th key={index}>{row[key]}</th>;
            })}
          </tr>
        );
      })}
      {children}
    </table>
  );
};

Table.propTypes = {
  rows: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func
};

export default Table;
