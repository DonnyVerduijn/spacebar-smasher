const User = require('./User');

const userActions = ({ users }) => {
  return {
    validateUser(action) {
      const result = users.nameAvailable(action.name) && action.name.length > 0;
      return { name: action.name, isValid: result };
    },
    createUser(action) {
      if (users.userwithSocketIdExists(action.id)) {
        users.removeBySocketId(action.id);
      }
      const user = User({ name: action.name, socketId: action.socketId });
      users.add(user);
      return user;
    }
  };
};

module.exports = userActions;
