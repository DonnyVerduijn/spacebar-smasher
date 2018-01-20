import React from 'react';
import PropTypes from 'prop-types';
import Window from './../../../components/Window';
import ItemList from './../../../components/ItemList';

const menuItems = [
  { id: 'NEW_GAME_BTN', label: 'New game' },
  { id: 'JOIN_GAME_BTN', label: 'Join game' },
  { id: 'HIGHSCORES_BTN', label: 'Highscores' }
];

const MainWindow = ({ onClick }) => {
  return (
    <Window>
      <ItemList
        className="Menu"
        items={menuItems}
        onClick={id => {
          onClick('MAIN', id);
        }}
      />
    </Window>
  );
};

MainWindow.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default MainWindow;
