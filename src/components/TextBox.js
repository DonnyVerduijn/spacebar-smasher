import React from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

export const TextBox = ({ onChange }) => {
  return (
    <input
      className="TextBox"
      type="text"
      spellCheck="false"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

TextBox.propTypes = { onChange: PropTypes.func };

export default TextBox;
