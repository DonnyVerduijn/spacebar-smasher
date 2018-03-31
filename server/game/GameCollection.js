const HashMap = require('hashmap');

const GameCollection = () => {
  const games = {};
  const nameHashMap = new HashMap();
  const ownerIdHashMap = new HashMap();
  const userIdHashMap = new HashMap();

  const deleteById = id => {
    // retreive game instance by id
    const game = games[id];
    // if the instance exists
    if (game) {
      // remove ownerId key from owners array
      ownerIdHashMap.delete(game.ownerId);
      // iterate over every user id in users array
      game.joinedUsers.forEach(userId => {
        // and clean up the hashmap
        userIdHashMap.delete(userId);
      });
      // also clean up the hashmap with game names
      nameHashMap.delete(games[id].name);
      // finally remove the instance
      Reflect.deleteProperty(games, id);
    }
  };

  return {
    add: game => {
      games[game.id] = game;
      ownerIdHashMap.set(game.ownerId, game.id);
      userIdHashMap.set(game.ownerId, game.id);
    },
    addUserById: (userId, gameId) => {
      userIdHashMap.set(userId, gameId);
    },
    deleteUserById: userId => {
      userIdHashMap.delete(userId);
    },
    confirmById: id => {
      nameHashMap.set(games[id].name, id);
    },
    deleteById,
    deleteByOwnerId: userId => {
      // get the game id
      const id = ownerIdHashMap.get(userId);
      // get the game instance
      deleteById(id);
    },
    getAll: () => {
      return games;
    },
    getByOwnerId(ownerId) {
      return ownerId ? games[ownerIdHashMap.get(ownerId)] : null;
    },
    getByUserId(userId) {
      return userId ? games[userIdHashMap.get(userId)] : null;
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
      const gameId = ownerIdHashMap.get(ownerId);
      return games[gameId] && games[gameId].ownerId === ownerId;
    }
  };
};

module.exports = GameCollection;
