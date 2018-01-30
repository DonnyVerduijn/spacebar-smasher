const User = require('./User');

const userActions = ({ users }) => {
  return {
    validateUser(action) {
      const result = users.nameAvailable(action.name) && action.name.length > 0;
      return Object.assign({}, action, {
        isValid: result, ...action, targets: [action.id] 
      });
    },
    createUser(action) {
      if (users.userWithIdExists(action.id)) {
        // we are overwriting the previous user instance
      }
      const user = User({ name: action.name, id: action.id });
      users.add(user);
      return { ...user, ...action, targets: [action.id] };
    },
    getUser(action) {
      const user = users.getById(action.id);
      return { ...user, ...action };
    },
    updateUser(action) {
      const user = users.getById(action.id);
      return { ...user, ...action };
    }
  };
};

module.exports = userActions;
