import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, label, className, children }) => {
    return <button className={`Button ${className}`} onClick={onClick}>{label || children}</button>;
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string
};

export default Button;
