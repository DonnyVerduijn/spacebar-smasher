const HashMap = require('hashmap');

const UserCollection = () => {
  const users = {};
  const nameHashMap = new HashMap();
  const clientIdHashMap = new HashMap();

  return {
    add: user => {
      // console.log('add: ', user);
      users[user.id] = user;
      nameHashMap.set(user.name, user.id);
      clientIdHashMap.set(user.clientId, user.id);
    },
    removeById: id => {
      nameHashMap.delete(users[id].name);
      clientIdHashMap.delete(users[id].clientId);
      Reflect.deleteProperty(users, id);
    },
    getAll: () => {
      return users;
    },
    getAllById: () => {
      return Object.keys(users);
    },
    getByClientId: (clientId) => {
      return users[clientIdHashMap.get(clientId)];
    },
    getById: id => {
      return users[id];
    },
    clientIdExists: clientId => {
      return clientIdHashMap.get(clientId);
    },
    nameAvailable: name => {
      return nameHashMap.get(name) === undefined;
    }
  };
};

module.exports = UserCollection;
