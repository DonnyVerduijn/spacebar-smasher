import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, disabled, label, className, children }) => {
  return (
    <button
      className={`Button ${className}`}
      onClick={(e) => onClick(e.target.value)}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
};

export default Button;
