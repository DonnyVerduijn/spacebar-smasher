import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ label, onClick }) => {
  return (
    <li className="Item">
      <button className="Button" onClick={onClick}>
        {label}
      </button>
    </li>
  );
};
Item.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

Item.defaultProps = { label: '' };

export default Item;
