import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <ul className="ItemList">
      {items.map((item, index) => {
        return (
          <Item key={index} label={item.label} onClick={item.onClick} />
        );
      })}
    </ul>
  );
};

ItemList.propTypes = { items: PropTypes.array.isRequired };

export default ItemList;
