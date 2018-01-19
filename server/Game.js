const uuid = require('uuid4');

const Game = data => {
    const id = uuid();
    let players = [];
    let isActive = false;
    let isPaused = false;
    const { name, ownerId, createdAt } = data;
    players.push(ownerId);
    return {
      getId: () => {
        return id;
      },
      getCreatedAt: () => {
        return createdAt;
      },
      getOwnerId: () => {
        return ownerId;
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
