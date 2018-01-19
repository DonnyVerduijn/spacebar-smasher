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
    getAllById: () => {
      return Object.keys(players);
    },
    getAllByClientId: () => {
      return Object.keys(players).map(key => {
        return players[key].getClientId();
      });
    },
    getById: id => {
      return players[id];
    },
    playerExistsByClientId: clientId => {
      return Boolean(Object.keys(players)
        .map(key => {
          return players[key];
        })
        .find(player => {
          return player.getClientId() === clientId;
        }));
    }
  };
};

module.exports = PlayerCollection;
