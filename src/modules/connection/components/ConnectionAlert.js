import React from 'react';
import PropTypes from 'prop-types';
import Alert from './../../../components/Alert';

const ConnectionAlert = ({ message }) => {
    return <Alert message={ message }/>;
};

ConnectionAlert.propTypes = { message: PropTypes.string };

export default ConnectionAlert;
