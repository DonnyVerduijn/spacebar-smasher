import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

const Label = ({ children }) => {
    return <label className="Label">{children}</label>;
};

Label.propTypes = { children: PropTypes.string };

export default Label;
