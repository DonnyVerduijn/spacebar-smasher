const gameResponses = {
  createGame(response) {
    return {
      type: 'CREATE_GAME',
      gameId: response.gameId,
      ownerId: response.ownerId,
      name: response.name,
      users: response.users
    };
  },
  validateGame(response) {
    return {
      type: 'VALIDATE_GAME',
      isValid: response.isValid,
      name: response.name
  };
  },
  startGame(response) {
    return { type: 'START_GAME', ...response };
  },
  joinGame(response) {
    return { type: 'JOIN_GAME', ...response };
  },
  pauseGame(response) {
    return { type: 'PAUSE_GAME', ...response };
  },
  resumeGame(response) {
    return { type: 'RESUME_GAME', ...response };
  },
  quitGame(response) {
    return { type: 'QUIT_GAME', ...response };
  },
  leaveGame(response) {
    return { type: 'LEAVE_GAME', ...response };
  }
};

module.exports = gameResponses;
