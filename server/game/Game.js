const uuid = require('uuid4');

const proto = {
  getUserIds() {
    return this.userIds;
  },
  setIsActive(value) {
    this.isActive = value;
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
      userIds: {
        value: options.userIds || [],
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
      isFinished: {
        value: false,
        writable: true,
        configurable: false,
        enumerable: true
      },
      createdAt: {
        value: Date.now(),
        writable: false,
        configurable: false,
        enumerable: true
      }
    };

    return Object.create(proto, params);
  };

  module.exports = Game;
