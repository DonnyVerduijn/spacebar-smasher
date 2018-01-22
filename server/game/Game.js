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
        writable: false,
        configurable: false,
        enumerable: true
      },
      users: {
        users: [data.ownerId],
        writable: true,
        configurable: false,
        enumerable: true
      },
      isActive: {
        value: false,
        writable: true,
        configurable: false,
        enumerable: true
      },
      isPaused: {
        value: false,
        writable: true,
        configurable: false,
        enumerable: true
      },
      name: {
        value: data.name,
        writable: true,
        configurable: false,
        enumerable: true
      },
      createdAt: {
        value: Date.now(),
        writable: false,
        configurable: false,
        enumerable: true
      },
      ownerId: {
        value: data.ownerId,
        writable: false,
        configurable: false,
        enumerable: true
      }
    };

    return Object.create(proto, params);
  };

  module.exports = Game;
