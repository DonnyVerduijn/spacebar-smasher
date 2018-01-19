import React from 'react';
import PropTypes from 'prop-types';

import AvailableGameWindowContainer from './../containers/AvailableGameWindowContainer';
import HighScoreWindowContainer from './../containers/HighScoreWindowContainer';
import LobbyWindowContainer from './../containers/LobbyWindowContainer';
import NewGameWindowContainer from './../containers/NewGameWindowContainer';
import NewUserWindowContainer from './../containers/NewUserWindowContainer';
import MainWindowContainer from '../containers/MainWindowContainer';
import PauseWindowContainer from './../containers/PauseWindowContainer';
import GameOverWindowContainer from './../containers/GameOverWindowContainer.js';


const getActiveWindow = (active) => {
    switch (active) {
        case 'MAIN':
        return <MainWindowContainer/>;
        case 'NEW_USer':
        return <NewUserWindowContainer/>;
        case 'NEW_GAME':
        return <NewGameWindowContainer/>;
        case 'JOIN_GAME':
        return <AvailableGameWindowContainer/>;
        case 'LOBBY':
        return <LobbyWindowContainer/>;
        case 'PAUSE':
        return <PauseWindowContainer/>;
        case 'GAME_OVER':
        return <GameOverWindowContainer/>;
        case 'HIGHSCORES':
        return <HighScoreWindowContainer/>;
        default:
        return <MainWindowContainer/>;
    }
};

const ActiveWindow = ({ active }) => {
    return getActiveWindow(active);
};

ActiveWindow.propTypes = { active: PropTypes.string };

export default ActiveWindow;
