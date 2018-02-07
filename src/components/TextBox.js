import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  updateValue(value) {
    this.setState({ value });
  }

  render() {
    const {
      label,
      isValid,
      autoFocus,
      shouldInform,
      informOnEmpty,
      onChange,
      value
    } = this.props;

    const isNotEmpty = value.length > 0;
    const addedClass = isValid ? 'valid' : 'invalid';
    const shouldApplyClass = informOnEmpty && shouldInform ? true : isNotEmpty;
    return (
      <div className={`TextBox ${shouldApplyClass ? addedClass : ''}`}>
        <label>{label}</label>
        <input
          autoFocus={autoFocus}
          value={this.state.value}
          type="text"
          spellCheck="false"
          onChange={e => {
            this.updateValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

TextBox.defaultProps = {
  shouldInform: true,
  informOnEmpty: false,
  isValid: null,
  autoFocus: false,
  value: ''
};

TextBox.propTypes = {
  shouldInform: PropTypes.bool,
  informOnEmpty: PropTypes.bool,
  label: PropTypes.string,
  isValid: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default TextBox;
