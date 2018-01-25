import React from 'react';
import PropTypes from 'prop-types';
import Alert from './../../../components/Alert';

const SocketAlert = ({ message }) => {
    return <Alert message={ message }/>;
};

SocketAlert.propTypes = { message: PropTypes.string };

export default SocketAlert;
