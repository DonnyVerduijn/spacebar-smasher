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
    createGame(action) {
      const game = Game({
        ownerId: action.ownerId,
        name: action.name
      });
      games.add(game);
      return { ...game, targets: [action.id] };
    },
    validateGame(action) {
      const result = games.nameAvailable(name) && name.length > 0;
      return {
        name: action.name,
        isValid: result,
        targets: [action.Id]
      };
    },
    startGame(action) {
      const game = games.getById(action.id);
      game.setIsActive(true);
      return { ...game, targets: game.getUsers() };
    },
    joinGame(action) {
      const game = games.getById(action.id);
      game.addUser(action.userId);
      return { ...game, targets: game.getUsers() };
    },
    pauseGame(action) {
      const game = games.getById(action.id);
      game.setIsPaused(true);
      return { ...game, targets: game.getUsers() };
    },
    resumeGame(action) {
      const game = games.getById(action.id);
      game.setIsPaused(false);
      return { ...game, targets: game.getUsers() };
    },
    quitGame(action) {
      const game = games.getById(action.id);
      game.setIsActive(false);
      return { ...game, targets: game.getUsers() };
    },
    exitGame(action) {
      const game = games.getById(action.id);
      return { ...game, targets: game.getUsers() };
    }
  };
};

module.exports = gameActions;
