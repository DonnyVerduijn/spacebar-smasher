const User = require('./user/User');
const UserCollection = require('./user/UserCollection');

const users = UserCollection();

const userActions = {
  validateUser(client, data) {
    return new Promise(resolve => {
      const result = users.nameAvailable(name) && name.length > 0;
      resolve({ name: data.name, clientId: client.id, isValid: result });
    });
  },
  createUser(client, data) {
    return new Promise(resolve => {
      if (users.clientIdExists(client.id)) {
        // remove the previous one
        users.removeByClientId(client.id);
      }
      // create a new user
      const user = User({ name: data.name, clientId: client.id });
      users.add(user);
      resolve(user);
    });
  }
};

module.exports = userActions;
