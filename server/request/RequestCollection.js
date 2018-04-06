const HashMap = require('hashmap');

const RequestCollection = () => {
  const requests = {};
  const userIdHashMap = new HashMap();

  return {
    add: request => {
      requests[request.id] = request;
      userIdHashMap.set(request.originUserId, request.id);
      userIdHashMap.set(request.destinationuserId, request.id);
    },
    deleteById: id => {
      if (requests[id]) {
        Reflect.deleteProperty(requests, id);
      }
    },
    getById: id => {
      return requests[id];
    },
    getByUserId: id => {
      const requestId = userIdHashMap.get(id);
      return typeof requestId === undefined ? null : requests[requestId];
    }
  };
};

module.exports = RequestCollection;
