import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ children }) => {
    return <span className="Display">{children}</span>;
};

Display.propTypes = {
    children: PropTypes.string
};

export default Display;
