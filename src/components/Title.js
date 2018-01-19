import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ children }) => {
  return <h1 className="Title">{children}</h1>;
};

Title.propTypes = { children: PropTypes.string };

export default Title;
