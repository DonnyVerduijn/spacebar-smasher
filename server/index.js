
const UserCollection = require('./user/UserCollection');
const GameCollection = require('./game/GameCollection');
const SocketServer = require('./SocketServer');
const gameActions = require('./game/gameActions');
const userActions = require('./user/userActions');
const socketActions = require('./socket/socketActions');
const bindActions = require('./utils/bindActions');

// instantiate collections
const users = UserCollection();
const games = GameCollection();

// create SocketServer instance
const socketServer = SocketServer();

// bind actions to action handlers
const bindedActions = bindActions({
  ...socketActions({ users, games }),
  ...userActions({ users, games }),
  ...gameActions({ users, games })
});

// console.log(bindedActions);

socketServer.onEvent(action => {
  // console.log(action);
  bindedActions[action.type](action);
});
