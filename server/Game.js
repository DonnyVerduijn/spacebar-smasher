const uuid = require('uuid4');

const proto = {
  getId() {
    return this.id;
  },
  getCreatedAt() {
    return this.createdAt;
  },
  getOwnerId() {
    return this.ownerId;
  },
  removeUserById(userId) {
    this.users = this.users.filter(user => {
      return user.id !== userId;
    });
  },
  getUserIds() {
    return this.users.slice();
  },
  getName() {
    return this.name;
  },
  getIsActive() {
    return this.isActive;
  },
  setIsActive(value) {
    this.isActive = value;
  },
  getIsPaused() {
    return this.isPaused;
  },
  setIsPaused(value) {
    this.isPaused = value;
  }
};

const Game = data => {

    const params = {
      id: {
        value: uuid(),
        writable: false
      },
      users: {
        users: [data.ownerId],
        writable: true
      },
      isActive: {
        value: false,
        writable: true
      },
      isPaused: {
        value: false,
        writable: true
      },
      name: {
        value: data.name,
        writable: true
      },
      createdAt: {
        value: Date.now(),
        writable: false
      },
      ownerId: {
        value: data.ownerId
      }
    };

    return Object.create(proto, params);
  };

  module.exports = Game;
