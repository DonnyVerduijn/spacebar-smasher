import React from 'react';
import PropTypes from 'prop-types';

import AvailableUserWindowContainer from './../containers/AvailableUserWindowContainer';
import HighScoreWindowContainer from './../containers/HighScoreWindowContainer';
import LobbyWindowContainer from './../containers/LobbyWindowContainer';
import NewUserWindowContainer from './../containers/NewUserWindowContainer';
import MainWindowContainer from '../containers/MainWindowContainer';
import PauseWindowContainer from './../containers/PauseWindowContainer';
import GameOverWindowContainer from './../containers/GameOverWindowContainer';
import NoConnectionWindowContainer from './../containers/NoConnectionWindowContainer';
import GameWindowContainer from '../containers/GameWindowContainer';
import RequestWindowContainer from '../containers/RequestWindowContainer';

const getActiveWindow = (active) => {
    console.log(active);
    switch (active) {
        case 'MAIN':
        return <MainWindowContainer/>;
        case 'NEW_USER':
        case 'JOIN_GAME':
        return <NewUserWindowContainer/>;
        case 'AVAILABLE_USERS':
        return <AvailableUserWindowContainer/>;
        case 'LOBBY':
        return <LobbyWindowContainer/>;
        case 'PAUSE':
        return <PauseWindowContainer/>;
        case 'GAME_OVER':
        return <GameOverWindowContainer/>;
        case 'REQUEST':
        return <RequestWindowContainer/>;
        case 'HIGHSCORES':
        return <HighScoreWindowContainer/>;
        case 'NO_CONNECTION':
        return <NoConnectionWindowContainer/>;
        case 'GAME':
        return <GameWindowContainer/>;
        default:
        return null;
    }
};

const ActiveWindow = ({ active }) => {
    return getActiveWindow(active);
};

ActiveWindow.propTypes = { active: PropTypes.string };

export default ActiveWindow;
