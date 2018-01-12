const uuid = require('uuid4');

const Game = data => {
    const id = uuid();
    let players = [];
    let isActive = false;
    let isPaused = false;
    const { name, createdBy, createdAt } = data;
    players.push(createdBy);
    return {
      getId: () => {
        return id;
      },
      getCreatedAt: () => {
        return createdAt;
      },
      removePlayerById: playerId => {
        players = players.filter(player => {
          return player.id !== playerId;
        });
      },
      getPlayerIds: () => {
        return players.slice();
      },
      getName: () => {
        return name;
      },
      getIsActive: () => {
        return isActive;
      },
      setIsActive: value => {
        isActive = value;
      },
      getIsPaused: () => {
        return isPaused;
      },
      setIsPaused: value => {
        isPaused = value;
      }
    };
  };

  module.exports = Game;
