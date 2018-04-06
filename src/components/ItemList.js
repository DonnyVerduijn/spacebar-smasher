import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';
import Item from './Item';

const ItemList = (props) => {
  const { style, value, className, items, onClick } = props;
  return (
    <ul style={style} className={`ItemList ${className}`}>
      {items.map((item, index) => {
        return (
          <Item
            key={item.id || index}
            label={item[value] || item.value}
            onClick={onClick ? () => onClick(item.id || index) : undefined}
          />
        );
      })}
    </ul>
  );
};

ItemList.defaultProps = {
  className: ''
};

ItemList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string
};

export default ItemList;
