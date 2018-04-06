const HashMap = require('hashmap');

const GameCollection = () => {
  const games = {};
  const userIdHashMap = new HashMap();

  const deleteById = id => {
    // retreive game instance by id
    const game = games[id];
    // if the instance exists
    if (game) {
      // iterate over every user id in users array
      game.userIds.forEach(userId => {
        // and clean up the hashmap
        userIdHashMap.delete(userId);
      });
      // finally remove the instance
      Reflect.deleteProperty(games, id);
    }
  };

  return {
    add: game => {
      games[game.id] = game;
      game.userIds.forEach(id => {
        userIdHashMap.set(id, game.id);
      });
    },
    deleteById,
    getAll: () => {
      return games;
    },
    getByUserId(userId) {
      return userId ? games[userIdHashMap.get(userId)] : null;
    },
    getById: id => {
      return games[id];
    }
  };
};

module.exports = GameCollection;
