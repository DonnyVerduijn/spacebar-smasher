import socketClient from './../utils/SocketClient';
import store from './createStore';
import * as actions from './gameActions';

// these events are called by the server

socketClient.on('GAME_CREATED', (data) => {
  // user has game created
  store.dispatch(actions.gameCreated(data));
});

socketClient.on('GAME_STARTED', (data) => {
  // user has game started (owner)
  store.dispatch(actions.gameStarted(data));
});

socketClient.on('GAME_PAUSED', (data) => {
  // player in game has game paused
  store.dispatch(actions.gamePaused(data));
});

socketClient.on('GAME_RESUMED', (data) => {
  // player in game has game resumed
  store.dispatch(actions.gameResumed(data));
});

socketClient.on('GAME_QUIT', (data) => {
  // user has quitted the game
  store.dispatch(actions.gameQuit(data));
});
