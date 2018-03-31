const User = require('./User');

const userActions = ({ users }) => {
  return {
    instantiateUser(action) {
      users.deleteById(action.userId);
      const user = User({ name: action.name, id: action.userId });
      const isValid = users.nameAvailable(user.name) && user.name.length > 0;
      user.setIsValid(isValid);
      user.setIsValidated(true);
      users.add(user);
      return Object.assign({}, action, {
        users: { [user.id]: user },
        targets: [action.userId]
      });
    },
    validateUser(action) {
      const user = users.getById(action.userId);
      const isValid =
        users.nameAvailable(action.name) && action.name.length > 0;
      user.setName(action.name);
      user.setIsValid(isValid);
      user.setIsValidated(true);
      return Object.assign({}, action, {
        users: { [user.id]: user },
        targets: [action.userId]
      });
    },
    confirmUser(action) {
      const user = users.getById(action.userId);
      user.setIsConfirmed(true);
      users.confirmById(user.id);
      return Object.assign({}, action, { users: { [user.id]: user }, targets: [action.userId] });
    },
    getUser(action) {
      const user = users.getById(action.id);
      return { users: { [user.id]: user }, ...action };
    },
    updateUser(action) {
      const user = users.getById(action.id);
      return { users: { [user.id]: user }, ...action };
    }
  };
};

module.exports = userActions;
