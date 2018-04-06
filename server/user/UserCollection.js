const HashMap = require('hashmap');

const UserCollection = () => {
  const users = {};
  const nameHashMap = new HashMap();

  return {
    add: user => {
      users[user.id] = user;
    },
    confirmById: id => {
      nameHashMap.set(users[id].name, id);
    },
    unconfirmById: id => {
      nameHashMap.remove(users[id].name);
    },
    deleteById: id => {
      if (users[id]) {
        nameHashMap.delete(users[id].name);
        Reflect.deleteProperty(users, id);
      }
    },
    getAll: () => {
      return users;
    },
    listByCurrentWindow: currentWindow => {
      return Object.keys(users)
        .filter(id => users[id].currentWindow === currentWindow)
        .reduce((previous, next) => ({ ...previous, [next]: users[next] }), {});
    },
    getAvailable: () => {
      return Object.keys(users)
        .filter(
          id => users[id].isAvailable &&
            users[id].isConfirmed
        )
        .reduce((previous, next) => ({ ...previous, [next]: users[next] }), {});
    },
    getById: id => {
      return users[id];
    },
    nameAvailable: name => {
      return !nameHashMap.has(name);
    }
  };
};

module.exports = UserCollection;
