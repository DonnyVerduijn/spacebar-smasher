const PlayerCollection = () => {
    const players = {};
    return {
      add: player => {
        players[player.id] = player;
      },
      removeById: id => {
        players[id] = undefined;
      },
      getAll: () => {
        return players;
      },
      getById: id => {
        return players[id];
      }
    };
  };

  module.exports = PlayerCollection;
