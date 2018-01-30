const socketActions = ({ games }) => {
  return {
    socketClosed(action) {
      const game = games.getByUserId(action.userId);
      if (game) {
        game.deleteUserById(action.userId);
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
