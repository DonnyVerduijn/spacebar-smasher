import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import ItemList from './../../../components/ItemList';

const menuItems = [
  { label: 'New game', target: 'NEW_USER' },
  { label: 'Join game', target: 'NEW_USER' },
  { label: 'Highscores', target: 'HIGHSCORES' }
];

const MainWindow = ({ listItemClicked }) => {
  return (
    <Window>
      <ItemList
        className="Menu"
        items={menuItems}
        onClick={id => {
          console.log(id);
          listItemClicked(menuItems[id].target);
        }}
      />
    </Window>
  );
};

MainWindow.propTypes = {
  listItemClicked: PropTypes.func,
  children: PropTypes.node
};

export default MainWindow;
