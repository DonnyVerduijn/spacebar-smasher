const UserCollection = () => {
  const users = {};
  return {
    add: user => {
      users[user.id] = user;
    },
    removeById: id => {
      users[id] = undefined;
    },
    getAll: () => {
      return users;
    },
    getAllById: () => {
      return Object.keys(users);
    },
    getAllByClientId: () => {
      return Object.keys(users).map(key => {
        return users[key].clientId;
      });
    },
    getById: id => {
      return users[id];
    },
    userByClientIdExists: clientId => {
      return Boolean(Object.keys(users)
        .map(key => {
          return users[key];
        })
        .find(user => {
          return user.clientId === clientId;
        }));
    },
    userByNameExists: name => {
      const userNames = Object.keys(users).map(key => {
        return users[key];
      });
      userNames.push({ name: 'test' });
      return userNames.every(user => {
        return user.name !== name;
      });
    }
  };
};

module.exports = UserCollection;
