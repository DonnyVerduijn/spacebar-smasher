import * as actions from './gameActions';

// these events are called by the server
const gameEvents = (client, dispatch) => {
  client.on('GAME_VALIDATED', game => {
    // user has game created
    dispatch(actions.gameValidated(game));
  });

  client.on('GAME_CREATED', game => {
    // user has game created
    dispatch(actions.gameCreated(game));
  });

  client.on('GAME_STARTED', game => {
    // user has game started (owner)
    dispatch(actions.gameStarted(game));
  });

  client.on('GAME_PAUSED', game => {
    // user in game has game paused
    dispatch(actions.gamePaused(game));
  });

  client.on('GAME_RESUMED', game => {
    // user in game has game resumed
    dispatch(actions.gameResumed(game));
  });

  client.on('GAME_QUIT', game => {
    // user has quitted the game
    dispatch(actions.gameQuit(game));
  });
};

export default gameEvents;
