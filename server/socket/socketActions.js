const socketActions = ({ games, users }) => {
  return {
    socketClosed(action) {
      // retrieve game instance
      const user = users.getById(action.userId);
      const game = user ? games.getByUserId(user.id) : undefined;
      // default targets to null
      let targets = null;
      let type = 'SOCKET_CLOSED';
      // delete the user instance
      if (user) {
        users.deleteById(user.id);
        type = 'DELETE_USER';
      }
      // if the user is inside a game or owns one
      if (game) {
        // delete the user from the game
        game.deleteUser(user.id);
        // store the targets to be notified
        targets = game.users;
        // if the user owns the game
        if (game.ownerId === user.id) {
          // make the game quit
          type = 'QUIT_GAME';
          // remove the game instance
          games.deleteByUserId(user.id);
        }
      }
      return { ...action, id: action.userId, type, targets };
    },
    socketConnected(action) {
      return { ...action, id: action.userId, targets: [action.userId] };
    },
    socketError(action) {
      return { ...action, id: action.userId };
    }
  };
};

module.exports = socketActions;
