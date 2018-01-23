const User = require('./User');
const UserCollection = require('./UserCollection');

const users = UserCollection();

const userActions = {
  validateUser(client, data) {
    const result = users.nameAvailable(name) && name.length > 0;
    return { name: data.name, clientId: client.id, isValid: result };
  },
  createUser(client, data) {
    if (users.clientIdExists(client.id)) {
      // remove the previous one
      users.removeByClientId(client.id);
    }
    // create a new user
    const user = User({ name: data.name, clientId: client.id });
    users.add(user);
    return user;
  }
};

module.exports = userActions;
