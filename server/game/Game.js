const uuid = require('uuid4');

const proto = {
  deleteUserById(userId) {
    // console.log('userid', userId);
    // console.log('users', this.users);
    this.users = this.users.filter(user => {
      return user.id !== userId;
    });
  },
  getUserIds() {
    return this.users;
  },
  addUser(userId) {
    this.users.push(userId);
  },
  deleteUser(userId) {
    this.users = this.users.filter(id => {
      return id !== userId;
    });
  },
  setName(value) {
    this.name = value;
  },
  setIsActive(value) {
    this.isActive = value;
  },
  setIsValid(value) {
    this.isValid = value;
  },
  setIsConfirmed(value) {
    this.isConfirmed = value;
  },
  setIsPaused(value) {
    this.isPaused = value;
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
      isConfirmed: {
        value: false,
        writable: true,
        configurable: false,
        enumerable: true
      },
      isAborted: {
        value: false,
        writable: true,
        configurable: false,
        enumerable: true
      },
      isFinished: {
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
