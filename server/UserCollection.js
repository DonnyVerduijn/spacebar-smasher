import HashMap from 'hashmap';

const UserCollection = () => {
  const users = {};
  const nameHashMap = new HashMap();
  const clientIdHashMap = new HashMap();

  return {
    add: user => {
      users[user.id] = user;
      nameHashMap.set(user.name, user.id);
      clientIdHashMap.set(user.clientId, user.id);
    },
    removeById: id => {
      nameHashMap.delete(users[id].name);
      clientIdHashMap.delete(users[id].clientId);
      Reflect.deleteProperty(id, users);
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
    nameExists: name => {
      return nameHashMap.get(name);
    }
  };
};

module.exports = UserCollection;
