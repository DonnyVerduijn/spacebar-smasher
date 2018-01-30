const socketActions = ({ users, games }) => {
  return {
    socketClosed(action) {
      // distribute updates
      const user = users.getById(action.id);
      const game = user ? games.getByUserId(user.id) : undefined;
      if (game) {
        game.deleteUserById(action.id);
      }
      const targets = game ? game.users : null;
      return { ...action, targets };
    },
    socketConnected(action) {
      return { ...action, targets: [action.id] };
    },
    socketError(action) {
      return { ...action };
    }
  };
};

module.exports = socketActions;
