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
      getById: id => {
        return games[id];
      }
    };
  };

  module.exports = GameCollection;
