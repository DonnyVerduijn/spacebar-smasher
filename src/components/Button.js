import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, type, disabled, label, className, children }) => {
  return (
    <button
      className={`Button ${className}`}
      onClick={e => {
        e.preventDefault();
        onClick(e.target.value);
      }}
      disabled={disabled}
      type={type}
    >
      {label || children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
};

export default Button;
