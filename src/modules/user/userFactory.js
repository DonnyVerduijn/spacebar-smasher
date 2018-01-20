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
    id: { value: options.id, writable: false },
    name: { value: options.name || '' },
    width: {
      value: options.width || 100,
      writable: true
    },
    height: {
      value: options.height || 0,
      writable: true
    },
    color: {
      value: options.color || 'black',
      writable: true
    },
    score: {
      value: 0,
      writable: true
    },
    position: {
      value: options.position || { x: 0, y: 0 },
      writable: true
    }
  });
};

export default UserFactory;
