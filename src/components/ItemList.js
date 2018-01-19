import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';
import Item from './Item';

const ItemList = ({ className, items, onClick }) => {
  return (
    <ul className={`ItemList ${className}`}>
      {items.map((item, index) => {
        return (
          <Item key={index}
          id={index}
          label={item.label}
          onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

ItemList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func
};

export default ItemList;
