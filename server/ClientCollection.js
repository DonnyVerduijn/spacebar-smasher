const ClientCollection = () => {
  const clients = {};

  const add = client => {
      clients[client.getId()] = client;
    },
    forEach = callback => {
      Object.keys(clients).forEach((key, index) => {
        return callback(clients[key], index);
      });
    },
    getAll = () => {
      return clients;
    },
    getById = id => {
      return clients[id];
    },
    removeById = id => {
      Reflect.deleteProperty(clients, id);
    },
    size = () => {
      return Object.keys(clients).length;
    };

  return {
    add,
    removeById,
    getById,
    getAll,
    forEach,
    size
  };
};

module.exports = ClientCollection;
