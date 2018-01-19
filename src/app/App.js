import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Canvas from './../components/Canvas';
// import AvailableGameWindow from './AvailableGameWindow';
// import HighScoreWindow from './HighScoreWindow';
// import LobbyWindow from './LobbyWindow';
import MainMenuWindowContainer from './../modules/menu/containers/MainMenuWindowContainer';
// import NewGameWindow from './NewGameWindow';
// import NewUserWindow from './NewUserWindow';
// import ActiveWindow from './ActiveWindow';

const App = () => {
  return (
    <div className="App">
      <Canvas />
      <MainMenuWindowContainer/>
    </div>
  );
};

App.propTypes = { isActive: PropTypes.bool };
App.defaultProps = { isActive: false };

export default App;
