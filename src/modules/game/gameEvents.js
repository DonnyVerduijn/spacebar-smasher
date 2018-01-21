import socketClient from './../../utils/SocketClient';
import store from './../../utils/ReduxStore';
import * as actions from './gameActions';

// these events are called by the server
export default (function gameEvents() {
  socketClient.on('GAME_VALIDATED', game => {
    // user has game created
    store.dispatch(actions.gameValidated(game));
  });

  socketClient.on('GAME_CREATED', game => {
    // user has game created
    store.dispatch(actions.gameCreated(game));
  });

  socketClient.on('GAME_STARTED', game => {
    // user has game started (owner)
    store.dispatch(actions.gameStarted(game));
  });

  socketClient.on('GAME_PAUSED', game => {
    // user in game has game paused
    store.dispatch(actions.gamePaused(game));
  });

  socketClient.on('GAME_RESUMED', game => {
    // user in game has game resumed
    store.dispatch(actions.gameResumed(game));
  });

  socketClient.on('GAME_QUIT', game => {
    // user has quitted the game
    store.dispatch(actions.gameQuit(game));
  });
})();
