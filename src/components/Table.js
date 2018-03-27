import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

const Table = ({ children, rows, onClick, show }) => {
  // take the keys from the first row as columns
  const columnKeys = rows.length === 0 ? [] : Object.keys(rows[0]);

  return (
    <table className="Table">
      <thead>
        <tr>
          {columnKeys.map((key, index) => {
            return show.indexOf(key) || show.length === 0
              ? <th key={index}>
                <span>{key}</span>
              </th>
             : null;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          // take a row key from id or index
          const rowKey = row.id ? row.id : rowIndex;

          return (
            <tr
              key={rowKey}
              className="row"
            >
              {onClick
                ? columnKeys.map((key, index) => {
                    return (
                      <th key={index}>
                        <a
                          href="/rowClicked"
                          onClick={e => {
                            e.preventDefault();
                            onClick(rowIndex);
                          }}
                        >
                          {typeof row[key] === 'object'
                            ? JSON.stringify(row[key])
                            : row[key]}
                        </a>
                      </th>
                    );
                  })
                : columnKeys.map((key, index) => {
                    return (
                      <th key={index}>
                        <span>{row[key]}</span>
                      </th>
                    );
                  })}
            </tr>
          );
        })}
        {children}
      </tbody>
    </table>
  );
};

Table.defaultProps = {
  rows: [],
  show: []
};

Table.propTypes = {
  show: PropTypes.array,
  rows: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func
};

export default Table;
