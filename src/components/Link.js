import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = ({ onClick, children }) => {
  return (
    <a
      className="Link"
      href="/"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string
};

export default Link;
