const GameCollection = () => {
    const games = {};
    return {
      add: game => {
        games[game.getId()] = game;
      },
      removeById: gameId => {
        games[gameId] = undefined;
      },
      getAll: () => {
        return games;
      },
      getAllByOwnerId: () => {
        return Object.keys(games).map(key => {
          return games[key].getOwnerId();
        });
      },
      getById: id => {
        return games[id];
      }
    };
  };

  module.exports = GameCollection;
