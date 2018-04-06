import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  icon,
  onClick,
  type,
  disabled,
  label,
  className,
  iconAfterLabel,
  children
}) => {
  const alignment = iconAfterLabel ? 'Right' : 'Left';
  return (
    <button
      className={`Button ${className} ${icon ? `${alignment} HasIcon` : ''}`}
      onClick={e => {
        e.preventDefault();
        onClick(e.target.value);
      }}
      disabled={disabled}
      type={type}
    >
      {label ? <span className="Label">{label}</span> : null}
      {icon ? <span className={`Icon ${alignment}`}>{icon}</span> : null}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button'
};

Button.propTypes = {
  icon: PropTypes.node,
  iconAfterLabel: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
};

export default Button;
