const HashMap = require('hashmap');

const GameCollection = () => {
  const games = {};
  const nameHashMap = new HashMap();
  const userIdHashMap = new HashMap();

  const deleteById = id => {
    // retreive game instance by id
    const game = games[id];
    // if the instance exists
    if (game) {
      // iterate over every user id in users array
      game.users.forEach(userId => {
        // and clean up the hashmap
        userIdHashMap.delete(userId);
      });
    }
    // also clean up the hashmap with game names
    nameHashMap.delete(games[id].name);
    // finally remove the instance
    Reflect.deleteProperty(games, id);
  };

  return {
    add: game => {
      games[game.id] = game;
      userIdHashMap.set(game.ownerId, game.id);
    },
    confirmById: id => {
      nameHashMap.set(games[id].name, id);
    },
    deleteById,
    deleteByUserId: userId => {
      // get the game id
      const id = userIdHashMap.get(userId);
      // get the game instance
      deleteById(id);
    },
    getAll: () => {
      return games;
    },
    getByUserId(userId) {
      return userId ? games[userIdHashMap.get(userId)] : undefined;
    },
    getById: id => {
      return games[id];
    },
    getConfirmed: () => {
      return Object.keys(games).reduce((previous, next) => {
        return games[next].isConfirmed
          ? Object.assign({}, previous, { [next]: games[next] })
          : previous;
      }, {});
    },
    nameAvailable: name => {
      return nameHashMap.get(name) === undefined;
    },
    ownerIdExists: ownerId => {
      const gameId = userIdHashMap.get(ownerId);
      return games[gameId] && games[gameId].ownerId === ownerId;
    }
  };
};

module.exports = GameCollection;
