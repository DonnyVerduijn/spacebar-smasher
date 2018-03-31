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

const gameActions = ({ games, users }) => {
  return {
    instantiateGame(action) {
      games.deleteById(action.userId);
      const game = Game({
        ownerId: action.userId,
        name: action.name
      });

      games.add(game);
      return Object.assign({
        type: action.type,
        games: { [game.id]: game },
        targets: [game.ownerId]
      });
    },
    confirmGame(action) {
      const user = users.getById(action.userId);
      const game = games.getByUserId(user.id);
      game.setIsConfirmed(true);
      game.addUserById(user);
      games.confirmById(game.id);
      return Object.assign(
        {},
        {
          type: action.type,
          games: { [game.id]: game },
          targets: [game.ownerId]
        }
      );
    },
    validateGame(action) {
      const game = games.getByUserId(action.userId);
      const isValid =
        games.nameAvailable(action.name) && action.name.length > 0;
      game.setName(action.name);
      game.setIsValid(isValid);
      game.setIsValidated(true);
      return Object.assign(
        {},
        {
          type: action.type,
          games: { [game.id]: game },
          targets: [action.userId]
        }
      );
    },
    startGame(action) {
      const game = games.getByUserId(action.userId);
      game.setIsActive(true);
      return Object.assign(
        {},
        {
          type: action.type,
          games: { [game.id]: game },
          targets: game.getUserIds()
        }
      );
    },
    joinGame(action) {
      const user = users.getById(action.userId);
      const game = games.getById(action.id);
      game.addUserById(user);
      games.addUserById(user.id, game.id);
      const userInstances = game.getUserIds().reduce(
        (previous, next) => ({
          ...previous,
          [next]: users.getById(next)
        }),
        {}
      );
      return Object.assign({
        type: action.type,
        games: { [game.id]: game },
        users: userInstances,
        targets: game.getUserIds()
      });
    },
    pauseGame(action) {
      const game = games.getByUserId(action.userId);
      game.setIsPaused(true);
      return Object.assign({
        type: action.type,
        games: { [game.id]: game },
        targets: game.getUserIds()
      });
    },
    resumeGame(action) {
      const game = games.getByUserId(action.userId);
      game.setIsPaused(false);
      return Object.assign({
        type: action.type,
        games: { [game.id]: game },
        targets: game.getUserIds()
      });
    },
    leaveGame(action) {
      const user = users.getById(action.userId);
      const game = games.getByUserId(action.userId);
      game.deleteUser(user);
      games.deleteUserById(user.id);
      return Object.assign({
        type: action.type,
        games: { [game.id]: game },
        users: game.getUserIds().reduce(
          (previous, userId) => ({
            ...previous,
            [userId]: users.getById(userId)
          }),
          {}
        ),
        targets: game.getUserIds()
      });
    },
    quitGame(action) {
      const user = users.getById(action.userId);
      const game = games.getByUserId(user.id);
      game.deleteUserById(user.id);

      const result = Object.assign({
        type: action.type,
        games: { [game.id]: game },
        targets: game.getUserIds()
      });

      games.deleteByOwnerId(user.id);
      return result;
    },
    exitGame(action) {
      const game = games.getByUserId(action.userId);
      return Object.assign({
          type: action.type,
          games: { [game.id]: game },
          targets: game.getUserIds()
        }
      );
    },
    availableGames(action) {
      const availableGames = games.getConfirmed();
      return Object.assign({
          type: action.type,
          games: availableGames,
          targets: [action.userId]
        }
      );
    }
  };
};

module.exports = gameActions;
