const actions = require('./gameActions');
const responses = require('./gameResponses');

const gameEvents = {
  attach(socketServer) {
    socketServer
      .on('VALIDATE_GAME')
      .then(actions.validateGame)
      .then(responses.gameValidated);
    socketServer
      .on('CREATE_GAME')
      .then(actions.createGame)
      .then(responses.gameCreated);
    socketServer
      .on('JOIN_GAME')
      .then(actions.joinGame)
      .then(responses.gameJoined);
    socketServer
      .on('START_GAME')
      .then(actions.startGame)
      .then(responses.gameStarted);
    socketServer
      .on('PAUSE_GAME')
      .then(actions.pauseGame)
      .then(responses.gamePaused);
    socketServer
      .on('RESUME_GAME')
      .then(actions.resumeGame)
      .then(responses.gameResumed);
    socketServer
      .on('QUIT_GAME')
      .then(actions.quitGame)
      .then(responses.gameQuit);
    socketServer
      .on('EXIT_GAME')
      .then(actions.exitGame)
      .then(responses.gameExit);
  }
};

module.exports = gameEvents;
