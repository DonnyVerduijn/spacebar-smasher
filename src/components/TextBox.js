import React from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

export const TextBox = ({ onChange, value }) => {
  return (
    <input
      value={value}
      className="TextBox"
      type="text"
      spellCheck="false"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

TextBox.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default TextBox;
