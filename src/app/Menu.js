import React from 'react';
import ItemList from './../components/ItemList';
import PropTypes from 'prop-types';

const Menu = ({ menuItems }) => {
return <div className="Menu">
    <h2 className="Title">Sp_cebar smɅsher</h2>
    <ItemList items={menuItems} />
  </div>;
};

Menu.propTypes = { menuItems: PropTypes.array };

export default Menu;
