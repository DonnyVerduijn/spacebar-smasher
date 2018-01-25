const gameActionResponses = (socketServer) => {
  return {
    createGame(game) {
      socketServer.sendById(game.id, {});
    },
    validateGame() {
      // needs to be client ID
      // socketServer.sendById(game.id, {});
    },
    startGame() {
      // socketServer.sendById(user.socketId, {
      //   type: 'START_GAME'
      // });
    },
    joinGame(game) {
      socketServer.sendById(game.id, {
        type: 'JOIN_GAME',
        id: game.id
      });
    },
    pauseGame(game) {
      socketServer.sendById(game.id, {
        type: 'PAUSE_GAME',
        id: game.id
      });
    },
    resumeGame(game) {
      socketServer.sendById(game.id, { type: 'RESUME_GAME' });
    },
    quitGame(game) {
      socketServer.sendById(game.id, { type: 'QUIT_GAME' });
    },
    leaveGame(game) {
      socketServer.sendById(game.id, { type: 'LEAVE_GAME' });
    }
  };
};

module.exports = gameActionResponses;
