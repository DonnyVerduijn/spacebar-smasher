const HashMap = require('hashmap');

const GameCollection = () => {
    const games = {};
    const nameHashMap = new HashMap();
    const ownerIdHashMap = new HashMap();
    return {
      add: game => {
        games[game.id] = game;
        nameHashMap.set(game.name, game.id);
        ownerIdHashMap.set(game.ownerId, game.id);
      },
      removeById: id => {
        nameHashMap.remove(games[id].name);
        ownerIdHashMap.remove(games[id].ownerId);
        Reflect.deleteProperty(games, id);
      },
      removeByOwnerId: ownerId => {
        const id = ownerIdHashMap.get(ownerId);
        console.log('id', id);
        console.log('games', games);
        nameHashMap.remove(games[id].name);
        ownerIdHashMap.remove(ownerId);
        Reflect.deleteProperty(games, id);
      },
      getAll: () => {
        return games;
      },
      getByOwnerId: (ownerId) => {
        return games[ownerIdHashMap.get(ownerId)];
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
