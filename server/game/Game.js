const uuid = require('uuid4');

const proto = {
  deleteUserById(userId) {
    this.joinedUsers = this.joinedUsers.filter(user => {
      return user.id !== userId;
    });
  },
  getUserIds() {
    return this.joinedUsers.map(user => user.id);
  },
  addUserById(user) {
    this.joinedUsers.push({ id: user.id, joinedAt: Date.now() });
  },
  deleteUser(user) {
    this.joinedUsers = this.joinedUsers.filter(({ id }) => {
      return id !== user.id;
    });
  },
  setName(value) {
    this.name = value;
  },
  setIsAborted(value) {
    this.isAborted = value;
  },
  setIsActive(value) {
    this.isActive = value;
  },
  setIsValid(value) {
    this.isValid = value;
  },
  setIsValidated(value) {
    this.isValidated = value;
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
      joinedUsers: {
        value: [],
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
      isValid: {
        value: false,
        writable: true,
        configurable: false,
        enumerable: true
      },
      isValidated: {
        value: false,
        writable: true,
        configurable: false,
        enumerable: true
      },
      name: {
        value: options.name || '',
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
