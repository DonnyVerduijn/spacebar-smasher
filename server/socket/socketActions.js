const User = require('./../user/User');

const socketActions = ({ requests, users }) => {
  return {
    socketClosed(action) {
      // retrieve game instance
      const user = users.getById(action.userId);
      const request = requests.getByUserId(action.userId);
      const userInstancesFromRequest = { [user.id]: user };

      // users.deleteById(user.id);
      user.setIsDeleted(true);
      const type = 'DELETE_USER';

      if (request) {
        const userIds = [request.destinationUserId, request.originUserId];
        userIds.forEach(id => {
          const userInstance = users.getById(id);
          userInstance.setCurrentWindow('AVAILABLE_USERS');
          userInstance.setIsAvailable(true);
          userInstancesFromRequest[userInstance.id] = userInstance;
        });
      }
      // const game = user ? games.getByUserId(user.id) : null;
      // default targets to null
      // let targets = null;
      // let type = 'SOCKET_CLOSED';

      // if the user is inside a game or owns one
      // if (game) {
      //   // make the game quit
      //   type = 'QUIT_GAME';
      //   // store the targets to be notified
      //   targets = game.userIds;
      //   // remove the game instance
      //   games.deleteById(game.id);

      //   game.userIds.map(id => users.getById(id).setIs)
      // }
      // const payload = game ? {
      //   games: { [game.id]: game },
      //   users: targets.reduce((previous, userId) => {
      //     return { ...previous, [userId]: users.getById(userId) };
      //   }, {})
      // } : {};
      // pass game if exists
      // pass users from game if game exists

      const deletedUser = Object.create(user);
      users.deleteById(user.id);
      const targets = Object.keys(users.listByCurrentWindow('AVAILABLE_USERS'));
      Object.keys(userInstancesFromRequest).forEach(id => {
        if (id !== user.id) {
          targets.push(id);
        }
      });
      return {
        users: Object.assign({ [deletedUser.id]: deletedUser }, userInstancesFromRequest),
        type,
        targets
      };
    },
    socketConnected(action) {
      users.deleteById(action.userId);
      const user = User({ id: action.userId, currentWindow: 'MAIN' });
      const isValid = users.nameAvailable(user.name) && user.name.length > 0;
      user.setIsValid(isValid);
      user.setIsValidated(true);
      users.add(user);
      return {
        type: action.type,
        users: { [user.id]: user },
        targets: [action.userId]
      };
    },
    // return { ...action, id: action.userId, targets: [action.userId] };
    socketError(action) {
      return { ...action, id: action.userId };
    }
  };
};

module.exports = socketActions;
