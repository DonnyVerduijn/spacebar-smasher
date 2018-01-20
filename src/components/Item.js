import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import Link from './Link';

const Item = ({ label, onClick }) => {
  return (
    <li className="Item">
      <Link onClick={onClick}>{label}</Link>
    </li>
  );
};
Item.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  onClick: PropTypes.func
};

Item.defaultProps = { label: '' };

export default Item;
