const socketActions = ({ games, users }) => {
  return {
    socketClosed(action) {
      // retrieve game instance
      const user = users.getById(action.userId);
      const game = user ? games.getByUserId(user.id) : null;
      // default targets to null
      let targets = null;
      let type = 'SOCKET_CLOSED';

      // delete the user instance
      if (user) {
        users.deleteById(user.id);
        type = 'LEAVE_GAME';
      }
      // if the user is inside a game or owns one
      if (game) {
        // delete the user from the game
        game.deleteUserById(user.id);
        games.deleteUserById(user.id);
        // if the user owns the game
        if (game.ownerId === user.id) {
          // make the game quit
          type = 'QUIT_GAME';
          // remove the game instance
          games.deleteById(game.id);
        }

        // store the targets to be notified
        targets = game.getUserIds();
      }
      const payload = game ? {
        games: { [game.id]: game },
        users: targets.reduce((previous, userId) => {
          return { ...previous, [userId]: users.getById(userId) };
        }, {})
      } : {};
      // pass game if exists
      // pass users from game if game exists
      return { ...action, ...payload, type, targets };
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
