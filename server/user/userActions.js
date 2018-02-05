const User = require('./User');

const userActions = ({ users }) => {
  return {
    instantiateUser(action) {
      const user = User({ name: action.name, id: action.userId });
      users.add(user);
      return Object.assign({}, action, user, { targets: [action.userId] });
    },
    validateUser(action) {
      const user = users.getById(action.userId);
      const isValid = users.nameAvailable(action.name) && action.name.length > 0;
      user.setName(action.name);
      user.setIsValid(isValid);
      return Object.assign({}, action,
        user,
        { targets: [action.userId] }
      );
    },
    confirmUser(action) {
      const user = users.getById(action.userId);
      user.setIsConfirmed(true);
      users.confirmById(user.id);
      return Object.assign({}, user, action, { targets: [action.userId] });
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
