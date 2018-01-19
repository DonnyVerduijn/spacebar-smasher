import React from 'react';
import PropTypes from 'prop-types';
import './SubTitle.css';

const SubTitle = ({ children }) => {
  return <h1 className="SubTitle">{children}</h1>;
};

SubTitle.propTypes = { children: PropTypes.string };

export default SubTitle;
