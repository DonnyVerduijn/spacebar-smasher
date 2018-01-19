import React from 'react';
import PropTypes from 'prop-types';
import Window from './../components/Window';
import ItemList from './../components/ItemList';
import './../components/Window.css';

const menuItems = [
  { id: 'NEW_GAME_BTN', label: 'new game' },
  { id: 'JOIN_GAME_BTN', label: 'join game' },
  { id: 'HIGHSCORES_BTN', label: 'highscores' }
];

const MainMenuWindow = ({ onClick }) => {
  return (
    <Window>
      <ItemList
        className="Menu"
        items={menuItems}
        onClick={id => {
          onClick('MAIN_MENU', menuItems[id].id);
        }}
      />
    </Window>
  );
};

MainMenuWindow.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default MainMenuWindow;
