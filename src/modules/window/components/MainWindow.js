import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import ItemList from './../../../components/ItemList';


const MainWindow = ({ menuItems, listItemClicked }) => {
  return (
    <Window>
      <ItemList
        className="Menu"
        items={menuItems}
        onClick={listItemClicked}
      />
    </Window>
  );
};

MainWindow.propTypes = {
  menuItems: PropTypes.array,
  listItemClicked: PropTypes.func,
  children: PropTypes.node
};

export default MainWindow;
