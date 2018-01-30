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
        nameHashMap.set(game.name, game.id);
        userIdHashMap.set(game.ownerId, game.id);
      },
      addUser: (gameId, userId) => {
        games[gameId].users.push(userId);
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
        return games[userIdHashMap.get(userId)];
      },
      getById: id => {
        return games[id];
      },
      nameAvailable: name => {
        return nameHashMap.get(name) === undefined;
      },
      ownerIdExists: ownerId => {
        return ownerIdHashMap.get(ownerId) !== undefined;
      }
    };
  };

  module.exports = GameCollection;
