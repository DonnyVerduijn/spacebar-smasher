// import uuid from 'uuid4';

// const User = require('./User');

const userActions = ({ users }) => {
  return {
    validateUser(action) {
      const user = users.getById(action.userId);
      const isValid =
        users.nameAvailable(action.name) && action.name.length > 0;
      user.setName(action.name);
      user.setIsValid(isValid);
      user.setIsValidated(true);
      return {
        type: action.type,
        users: { [user.id]: user },
        targets: [action.userId]
      };
    },
    requestUser(action) {
      const user = users.getById(action.userId);

      return {
        type: action.type,
        users: { [user.id]: user },
        request: {
          // id: uuid(),
          localUserId: action.userId,
          destinationUserId: action.enemyId,
          createdAt: Date.now()
        },
        targets: [action.userId, action.enemyId]
      };
    },
    confirmUser(action) {
      const user = users.getById(action.userId);
      user.setIsConfirmed(true);
      user.setConfirmedAt(Date.now());
      users.confirmById(user.id);
      return {
        type: action.type,
        users: { [user.id]: user },
        targets: Object.keys(users.listByCurrentWindow('AVAILABLE_USERS'))
      };
    },
    unconfirmUser(action) {
      const user = users.getById(action.userId);
      user.setIsConfirmed(false);
      users.unconfirmById(user.id);
      return {
        type: action.type,
        users: { [user.id]: user },
        targets: Object.keys(users.listByCurrentWindow('AVAILABLE_USERS'))
      };
    },
    getUser(action) {
      const user = users.getById(action.userId);
      return {
        type: action.type,
        users: { [user.id]: user },
        targets: [action.userId]
      };
    },
    updateUser(action) {
      const user = users.getById(action.userId);
      return {
        type: action.type,
        users: { [user.id]: user },
        targets: [action.userId]
      };
    },
    deleteUser(action) {
      const user = users.getById(action.userId);
      user.setIsDeleted(true);
      return {
        type: action.type,
        users: { [user.id]: user },
        targets: Object.keys(users.listByCurrentWindow('AVAILABLE_USERS'))
      };
    },
    navigateUser(action) {
      const user = users.getById(action.userId);
      if (user) {
        user.setCurrentWindow(action.location);
      }
      return {
        type: action.type,
        targets: null
      };
    },
    availableUsers(action) {
      return {
        type: action.type,
        users: users.getAvailable(),
        targets: [action.userId]
      };
    }
  };
};

module.exports = userActions;
