import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import ItemList from './../../../components/ItemList';

const MainWindow = ({ localUserId, menuItems, listItemClicked }) => {
  return (
    <Window>
      <ItemList
        items={menuItems}
        onClick={itemId => listItemClicked({ itemId, userId: localUserId })}
        style={{ textAlign: 'center' }}
      />
    </Window>
  );
};

MainWindow.propTypes = {
  localUserId: PropTypes.string,
  menuItems: PropTypes.array,
  listItemClicked: PropTypes.func,
  children: PropTypes.node
};

export default MainWindow;
