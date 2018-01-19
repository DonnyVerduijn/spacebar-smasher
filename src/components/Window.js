import React from 'react';
import PropTypes from 'prop-types';
// import Navigation from './Navigation';
import './Window.css';
import Title from './Title';

const Window = ({ title, children }) => {
  return (
    <div className="Window">
      <Title>{title}</Title>
      {children}
    </div>
  );
};

Window.propTypes = {
  title: PropTypes.string,
  // render: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Window.defaultProps = { title: process.env.REACT_APP_PROJECT_TITLE };

export default Window;
