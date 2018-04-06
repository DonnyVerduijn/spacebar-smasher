const uuid = require('uuid4');

const proto = {
    setStatus(status) {
        this.status = status;
    }
};

const Request = options => {
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
    originUserId: {
      value: options.originUserId || null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    destinationUserId: {
      value: options.destinationUserId || null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    status: {
        value: 'PENDING',
        writable: true,
        configurable: false,
        enumerable: true
    }
  };

  return Object.create(proto, params);
};

module.exports = Request;
