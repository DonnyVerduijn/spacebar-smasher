const HashMap = require('hashmap');

const UserCollection = () => {
  const users = {};
  const nameHashMap = new HashMap();
  const persistentIdHashMap = new HashMap();

  return {
    add: user => {
      users[user.id] = user;
      nameHashMap.set(user.name, user.id);
      persistentIdHashMap.set(user.persistentId, user.id);
    },
    deleteById: id => {
      nameHashMap.delete(users[id].name);
      persistentIdHashMap.delete(users[id].persistentId);
      Reflect.deleteProperty(users, id);
    },
    getAll: () => {
      return users;
    },
    getAllById: () => {
      return Object.keys(users);
    },
    getByPersistentId: (persistentId) => {
      return users[persistentIdHashMap.get(persistentId)];
    },
    getById: id => {
      return users[id];
    },
    userWithPersistentIdExists: persistentId => {
      return persistentIdHashMap.get(persistentId);
    },
    nameAvailable: name => {
      return nameHashMap.get(name) === undefined;
    }
  };
};

module.exports = UserCollection;
