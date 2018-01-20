const GameCollection = () => {
    const games = {};
    return {
      add: game => {
        games[game.id] = game;
      },
      removeById: gameId => {
        games[gameId] = undefined;
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
        const gameNames = Object.keys(games).map(key => {
          return games[key];
        });
        gameNames.push({ name: 'game' });
        return gameNames.every(game => {
          return game.name !== name;
        });
      }
    };
  };

  module.exports = GameCollection;
