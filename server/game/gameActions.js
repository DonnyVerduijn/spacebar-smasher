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


const gameActions = ({ games, users }) => {
  return {
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
    quitGame(action) {
      const user = users.getById(action.userId);
      const game = games.getByUserId(user.id);

      const result = Object.assign({
        type: action.type,
        games: { [game.id]: game },
        targets: game.getUserIds()
      });

      games.deleteById(game.id);
      return result;
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
