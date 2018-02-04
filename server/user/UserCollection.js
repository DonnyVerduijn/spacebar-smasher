const HashMap = require('hashmap');

const UserCollection = () => {
  const users = {};
  const nameHashMap = new HashMap();
  const persistentIdHashMap = new HashMap();

  return {
    add: user => {
      users[user.id] = user;

      persistentIdHashMap.set(user.persistentId, user.id);
    },
    confirmById: id => {
      nameHashMap.set(users[id].name, id);
    },
    deleteById: id => {
      if (users[id]) {
        nameHashMap.delete(users[id].name);
        persistentIdHashMap.delete(users[id].persistentId);
        Reflect.deleteProperty(users, id);
      }
    },
    getAll: () => {
      return users;
    },
    getAllById: () => {
      return Object.keys(users);
    },
    getByPersistentId: persistentId => {
      return users[persistentIdHashMap.get(persistentId)];
    },
    getById: id => {
      return users[id];
    },
    userWithIdExists: id => {
      return users[id] !== undefined;
    },
    userWithPersistentIdExists: persistentId => {
      return persistentIdHashMap.get(persistentId);
    },
    nameAvailable: name => {
      return !nameHashMap.has(name);
    },
    nameHashMap: () => {
      return nameHashMap.entries();
    }
  };
};

module.exports = UserCollection;
