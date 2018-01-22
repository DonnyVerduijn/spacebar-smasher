// User prototype
const proto = {
  setScore(value) {
    this.score = value;
  },
  setPosition(value) {
    this.position = value;
  }
};

const UserFactory = options => {
  return Object.create(proto, {
    id: {
      value: options.id,
      writable: false,
      enumerable: true,
      configurable: false
    },
    name: {
      value: options.name || '',
      writable: true,
      enumerable: true,
      configurable: false
    },
    width: {
      value: options.width || 100,
      writable: true,
      enumerable: true,
      configurable: false
    },
    height: {
      value: options.height || 0,
      writable: true,
      enumerable: true,
      configurable: false
    },
    color: {
      value: options.color || 'black',
      writable: true,
      enumerable: true,
      configurable: false
    },
    score: {
      value: 0,
      writable: true,
      enumerable: true,
      configurable: false
    },
    position: {
      value: options.position || { x: 0, y: 0 },
      writable: true,
      enumerable: true,
      configurable: false
    }
  });
};

export default UserFactory;
