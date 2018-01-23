const Game = require('./Game');
const GameCollection = require('./GameCollection');

const games = GameCollection();

const gameActions = {
  gameCreated(client, data, users) {
    const user = users.getByClientId(client.id);
    const game = Game({
      ownerId: user.id,
      name: data.name
    });
    games.add(game);
    return game;
  },
  validateGame(client, data) {
    const result = games.nameAvailable(name) && name.length > 0;
    return { name: data.name, clientId: client.id, isValid: result };
  },
  startGame(client, data) {
    const game = games.getById(data.gameId);
    game.setIsActive(true);
    return game;
  },
  joinGame(client, data) {
    const game = games.getById(data.gameId);
    game.addUser(data.userId);
    return game;
  },
  pauseGame(client, data) {
    const game = games.getById(data.gameId);
    game.setIsPaused(true);
    return game;
  },
  resumeGame(client, data) {
    const game = games.getById(data.gameId);
    game.setIsPaused(false);
    return game;
  },
  quitGame(client, data) {
    const game = games.getById(data.gameId);
    game.setIsActive(false);
    return game;
  },
  exitGame(client, data) {
    const game = games.getById(data.gameId);
    return game;
  }
};

module.exports = gameActions;
