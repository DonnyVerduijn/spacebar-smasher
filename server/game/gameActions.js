// gameActions.js
// Author: Donny Verduijn
// Version: 0.0.1

// Description:
// game actions are responsible to convert API requests
// into actions, that need to be executed by the server
// in order to store, manipulate or retreive any data.
// this data is available though the exposed properties
// and methods that are used in the state object.

// Container
// returns an object of available action functions

// Actions
// Every action returns the requested data

const Game = require('./Game');

const gameActions = ({ games }) => {
  return {
    instantiateGame(action) {
      const game = Game({
        ownerId: action.userId,
        name: action.name
      });
      games.add(game);
      return Object.assign({}, action, game, { targets: [game.ownerId] });
    },
    confirmGame(action) {
      const game = games.getByUserId(action.userId);
      game.setIsConfirmed(true);
      return Object.assign({}, action, game, { targets: [game.ownerId] });
    },
    validateGame(action) {
      const game = games.getByUserId(action.userId);
      const isValid = games.nameAvailable(action.name) && action.name.length > 0;
      game.setName(action.name);
      game.setIsValid(isValid);
      return Object.assign({}, action, game, { targets: [action.userId]
      });
    },
    startGame(action) {
      const game = games.getById(action.userId);
      game.setIsActive(true);
      return Object.assign({}, action, game, { targets: game.getUsers() });
    },
    joinGame(action) {
      const game = games.getById(action.userId);
      game.addUser(action.userId);
      return Object.assign({}, action, game, { targets: game.getUsers() });
    },
    pauseGame(action) {
      const game = games.getByUserId(action.userId);
      game.setIsPaused(true);
      return Object.assign({}, action, game, { targets: game.getUsers() });
    },
    resumeGame(action) {
      const game = games.getByUserId(action.userId);
      game.setIsPaused(false);
      return Object.assign({}, action, game, { targets: game.getUsers() });
    },
    quitGame(action) {
      const game = games.getByUserId(action.userId);
      game.setIsActive(false);
      return Object.assign({}, action, game, { targets: game.getUsers() });
    },
    exitGame(action) {
      const game = games.getByUserId(action.userId);
      return Object.assign({}, action, game, { targets: game.getUsers() });
    }
  };
};

module.exports = gameActions;
