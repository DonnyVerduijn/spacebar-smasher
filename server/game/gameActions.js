const Game = require('./game/Game');
const GameCollection = require('./game/GameCollection');

const games = GameCollection();

const gameActions = {
  gameCreated(client, data, users) {
    return new Promise(resolve => {
      const user = users.getByClientId(client.id);
      const game = Game({
        ownerId: user.id,
        name: data.name
      });
      games.add(game);
      resolve(game);
    });
  },
  validateGame(client, data) {
    return new Promise(resolve => {
      const result = games.nameAvailable(name) && name.length > 0;
      resolve({ name: data.name, clientId: client.id, isValid: result });
    });
  },
  startGame(client, data) {
    return new Promise(resolve => {
      const game = games.getById(data.gameId);
      game.setIsActive(true);
      resolve(game);
    });
  },
  joinGame(client, data) {
    return new Promise(resolve => {
      const game = games.getById(data.gameId);
      game.addUser(data.userId);
    resolve(game);
    });
  },
  pauseGame(client, data) {
    return new Promise(resolve => {
      const game = games.getById(data.gameId);
      game.setIsPaused(true);
        resolve(game);
    });
  },
  resumeGame(client, data) {
    return new Promise(resolve => {
      const game = games.getById(data.gameId);
      game.setIsPaused(false);
      resolve(game);
    });
  },
  quitGame(client, data) {
    return new Promise(resolve => {
      const game = games.getById(data.gameId);
      game.setIsActive(false);
      resolve(game);
    });
  },
  exitGame(client, data) {
    return new Promise(resolve => {
      const game = games.getById(data.gameId);
      resolve(game);
    });
  }
};

module.exports = gameActions;
