const socketActions = ({ users, games }) => {
  return {
    socketClosed(action) {
      // fetch user instance
      const user = users.getBySocketId(action.socketId);
      // fetch game instance
      const game = user ? games.getByUserId(user.id) : undefined;
      // distribute updates
      game.userIds.foreach(userId => {
          console.log(userId);
        // const user = users.getById(userId);
        // socketServer.sendById(user.socketId, {
        //   type: 'GAME_LEAVED',
        //   id: user.id
        // });
      });
    },
    socketConnected(action) {
        console.log(action);
    },
    socketError(action) {
        console.log(action);
    }
  };
};

module.exports = socketActions;
