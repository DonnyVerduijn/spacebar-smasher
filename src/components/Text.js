import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const Text = ({ children, weight }) => {
  return (
    <span className="Text" styles={{ fontWeight: weight }}>
      {children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  weight: PropTypes.string
};

export default Text;
