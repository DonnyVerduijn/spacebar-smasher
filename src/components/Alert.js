import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message }) => {
    return <div className="Alert">{message}</div>;
};

Alert.propTypes = { message: PropTypes.string };

export default Alert;
