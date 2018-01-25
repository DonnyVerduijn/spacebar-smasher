const HashMap = require('hashmap');

const UserCollection = () => {
  const users = {};
  const nameHashMap = new HashMap();
  const socketIdHashMap = new HashMap();

  return {
    add: user => {
      // console.log('add: ', user);
      users[user.id] = user;
      nameHashMap.set(user.name, user.id);
      socketIdHashMap.set(user.socketId, user.id);
    },
    removeById: id => {
      nameHashMap.delete(users[id].name);
      socketIdHashMap.delete(users[id].socketId);
      Reflect.deleteProperty(users, id);
    },
    getAll: () => {
      return users;
    },
    getAllById: () => {
      return Object.keys(users);
    },
    getBySocketId: (socketId) => {
      return users[socketIdHashMap.get(socketId)];
    },
    getById: id => {
      return users[id];
    },
    userWithSocketIdExists: socketId => {
      return socketIdHashMap.get(socketId);
    },
    nameAvailable: name => {
      return nameHashMap.get(name) === undefined;
    }
  };
};

module.exports = UserCollection;
