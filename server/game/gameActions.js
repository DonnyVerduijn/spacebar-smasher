const Game = require('./Game');

const gameActions = ({ users, games }) => {
  return {
    gameCreated(action) {
      const user = users.getBySocketId(action.socketId);
      const game = Game({
        ownerId: user.id,
        name: action.name
      });
      games.add(game);
      return game;
    },
    validateGame(action) {
      const result = games.nameAvailable(name) && name.length > 0;
      return { name: action.name, socketId: action.socketId, isValid: result };
    },
    startGame(action) {
      const game = games.getById(action.gameId);
      game.setIsActive(true);
      return game;
    },
    joinGame(action) {
      const game = games.getById(action.gameId);
      game.addUser(action.userId);
      return game;
    },
    pauseGame(action) {
      const game = games.getById(action.gameId);
      game.setIsPaused(true);
      return game;
    },
    resumeGame(action) {
      const game = games.getById(action.gameId);
      game.setIsPaused(false);
      return game;
    },
    quitGame(action) {
      const game = games.getById(action.gameId);
      game.setIsActive(false);
      return game;
    },
    exitGame(action) {
      const game = games.getById(action.gameId);
      return game;
    }
  };
};

module.exports = gameActions;
