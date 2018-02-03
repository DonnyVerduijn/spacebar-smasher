const uuid = require('uuid4');

const proto = {
  getId() {
    return this.id;
  },
  getPersistentId() {
    return this.persistentId;
  },
  getName() {
    return this.name;
  },
  setName(value) {
    this.name = value;
  },
  getIsConfirmed() {
    return this.isConfirmed;
  },
  setIsConfirmed(value) {
    this.isConfirmed = value;
  },
  getIsValid() {
    return this.isValid;
  },
  setIsValid(value) {
    this.isValid = value;
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
        value: options.id || uuid(),
        writable: false,
        configurable: false,
        enumerable: true
      },
      createdAt: {
        value: Date.now(),
        writable: false,
        configurable: false,
        enumerable: true
      },
      persistentId: {
        value: uuid(),
        writable: false,
        configurable: false,
        enumerable: true
      },
      isConfirmed: {
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
      score: {
        value: 0,
        writable: true,
        configurable: false,
        enumerable: true
      },
      isValid: {
        value: options.isValid || false,
        writable: true,
        configurable: false,
        enumerable: true
      }
  };

  return Object.create(proto, params);
};

module.exports = User;
