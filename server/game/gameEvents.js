const actions = require('./gameActions');
const responses = require('./gameResponses');

const gameEvents = (server) => {
    server
      .on('VALIDATE_GAME')
      .then(actions.validateGame)
      .then(responses.gameValidated);
    server
      .on('CREATE_GAME')
      .then(actions.createGame)
      .then(responses.gameCreated);
    server
      .on('JOIN_GAME')
      .then(actions.joinGame)
      .then(responses.gameJoined);
    server
      .on('START_GAME')
      .then(actions.startGame)
      .then(responses.gameStarted);
    server
      .on('PAUSE_GAME')
      .then(actions.pauseGame)
      .then(responses.gamePaused);
    server
      .on('RESUME_GAME')
      .then(actions.resumeGame)
      .then(responses.gameResumed);
    server
      .on('QUIT_GAME')
      .then(actions.quitGame)
      .then(responses.gameQuit);
    server
      .on('EXIT_GAME')
      .then(actions.exitGame)
      .then(responses.gameExit);
  };

module.exports = gameEvents;
