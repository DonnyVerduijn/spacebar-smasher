import HashMap from 'hashmap';

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
        Reflect.deleteProperty(id, games);
      },
      getAll: () => {
        return games;
      },
      getAllByOwnerId: () => {
        return Object.keys(games).map(key => {
          return games[key].ownerId;
        });
      },
      getById: id => {
        return games[id];
      },
      nameExists: name => {
        nameHashMap.get(name);
      }
    };
  };

  module.exports = GameCollection;
