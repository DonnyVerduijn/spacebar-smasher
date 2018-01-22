const uuid = require('uuid4');

const proto = {
  getId() {
    return this.id;
  },
  getClientId() {
    return this.clientId;
  },
  getName() {
    return this.name;
  },
  setScore(value) {
    this.score += value;
  },
  getScore() {
    return this.score;
  }
};

const User = options => {
  const params = {
    id: {
        value: uuid(),
        writable: false,
        configurable: false,
        enumerable: true
      },
      clientId: {
        value: options.clientId,
        writable: false,
        configurable: false,
        enumerable: true
      },
      name: {
        value: options.name,
        writable: false,
        configurable: false,
        enumerable: true
      },
      score: {
        value: 0,
        writable: true,
        configurable: false,
        enumerable: true
      }
  };

  return Object.create(proto, params);
};

module.exports = User;
