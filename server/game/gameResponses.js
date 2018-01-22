const socketServer = require('./../SocketServer');

const gameResponses = {
  gameCreated(game) {
    socketServer.sendById(game.id, {});
  },
  gameValidated(game) {
    // needs to be client ID
    socketServer.sendById(game.id, {});
  },
  gameStarted(game) {
    game.players.foreach(player => {
      socketServer.sendById(player.clientId, {
        type: 'GAME_STARTED',
        payload: {}
      });
    });
  },
  gameJoined(game) {
    socketServer.sendById(game.id, {
      type: 'GAME_JOINED',
      payload: { gameId: game.id }
    });
  },
  gamePaused(game) {
    socketServer.sendById(game.id, {
        type: 'GAME_PAUSED',
        payload: { gameId: game.id }
    });
  },
  gameResumed(game) {
    socketServer.sendById(game.id, { type: 'GAME_RESUMED' });
  },
  gameQuit(game) {
    socketServer.sendById(game.id, { type: 'GAME_QUIT' });
  },
  gameExit(game) {
    socketServer.sendById(game.id, { type: 'GAME_EXIT' });
  }
};

module.exports = gameResponses;
