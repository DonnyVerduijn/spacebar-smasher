import React from 'react';
import PropTypes from 'prop-types';
import Window from './Window';
import SubTitle from './SubTitle';
// import ItemList from './../components/ItemList';
import Table from './Table';

const HighScoreWindow = (highscores, onClick) => {
  return (
    <Window>
      <SubTitle>Highscores</SubTitle>
      <Table rows={highscores} onClick={onClick}/>
    </Window>
  );
};

HighScoreWindow.PropTypes = {
    highscores: PropTypes.array,
    onClick: PropTypes.func
};

export default HighScoreWindow;
