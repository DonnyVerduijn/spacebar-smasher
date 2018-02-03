import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';

const Paragraph = ({ children }) => {
    return <p className="Paragraph">{children}</p>;
};

Paragraph.propTypes = {
    children: PropTypes.string
};

export default Paragraph;
