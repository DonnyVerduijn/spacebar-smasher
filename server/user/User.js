const uuid = require('uuid4');

const proto = {
  setName(value) {
    this.name = value;
  },
  setIsConfirmed(value) {
    this.isConfirmed = value;
  },
  setConfirmedAt(value) {
    this.confirmedAt = value;
  },
  setIsValidated(value) {
    this.isValidated = value;
  },
  setIsValid(value) {
    this.isValid = value;
  },
  setIsAvailable(value) {
    this.isAvailable = value;
  },
  setScore(value) {
    this.score += value;
  },
  setCurrentWindow(value) {
    this.currentWindow = value;
  },
  setIsDeleted(value) {
    this.isDeleted = value;
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
      isConfirmed: {
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
      isAvailable: {
        value: true,
        writable: true,
        configurable: false,
        enumerable: true
      },
      isDeleted: {
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
      },
      currentWindow: {
        value: options.currentWindow || 'MAIN',
        writable: true,
        configurable: false,
        enumerable: true
      },
      confirmedAt: {
        value: null,
        writable: true,
        configurable: false,
        enumerable: true
      }
  };

  return Object.create(proto, params);
};

module.exports = User;
