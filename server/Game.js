const uuid = require('uuid4');

const Game = data => {
    const id = uuid();
    let users = [];
    let isActive = false;
    let isPaused = false;
    const { name, ownerId, createdAt } = data;
    users.push(ownerId);
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
      removeUserById: userId => {
        users = users.filter(user => {
          return user.id !== userId;
        });
      },
      getUserIds: () => {
        return users.slice();
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
