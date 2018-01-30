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
  deleteUserById(userId) {
    console.log('userid', userId);
    console.log('users', this.users);
    this.users = this.users.filter(user => {
      return user.id !== userId;
    });
  },
  getUserIds() {
    return this.users;
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
  },
  getUsers() {
    return this.users;
  }
};

const Game = options => {

    const params = {
      id: {
        value: uuid(),
        writable: false,
        configurable: false,
        enumerable: true
      },
      users: {
        value: [options.ownerId],
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
        value: options.name,
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
        value: options.ownerId,
        writable: false,
        configurable: false,
        enumerable: true
      }
    };

    return Object.create(proto, params);
  };

  module.exports = Game;
