import './Navigation.css';
import React from 'react';
import PropTypes from 'prop-types';
import './Flex.css';

const Flex = ({ justifyContent, children }) => {
  return (
    <div className="Flex" style={{ justifyContent }}>
      {children}
    </div>
  );
};

Flex.propTypes = {
  justifyContent: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Flex;
