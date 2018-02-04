import React from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

export const TextBox = ({ label, isValid, autoFocus, onChange, value }) => {
  const hasChanged = value.length > 0;
  const isValidClass = isValid ? 'valid' : 'invalid';
  return (
    <div className={`TextBox ${hasChanged ? isValidClass : ''}`}>
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
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default TextBox;
