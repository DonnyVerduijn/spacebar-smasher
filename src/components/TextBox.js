import React from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

export const TextBox = ({
  label,
  isValid,
  isValidated,
  autoFocus,
  onChange,
  value
}) => {
  const isNotEmpty = value.length > 0;
  const classed = isValid ? 'valid' : 'invalid';
  return (
    <div className={`TextBox ${isValidated && isNotEmpty ? classed : ''}`}>
      <label>{label}</label>
      <input
        autoFocus={autoFocus}
        value={value}
        type="text"
        spellCheck="false"
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

TextBox.defaultProps = {
  isValid: null,
  autoFocus: false,
  value: ''
};

TextBox.propTypes = {
  label: PropTypes.string,
  isValid: PropTypes.bool,
  isValidated: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default TextBox;
