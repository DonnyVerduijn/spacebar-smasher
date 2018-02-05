const SocketServer = require('./SocketServer');
const bindToSnakeCase = require('./utils/bindToSnakeCase');
// actions
const gameActions = require('./game/gameActions');
const userActions = require('./user/userActions');
const socketActions = require('./socket/socketActions');
const omit = require('./utils/omit');

// create state container
const state = require('./utils/createState');
// create SocketServer instance
const socketServer = SocketServer();

// bind actions to snakeCase keyed object
const bindedActions = bindToSnakeCase({
  ...socketActions(state),
  ...userActions(state),
  ...gameActions(state)
});

// console.log(bindedActions);

// on every event from the socketserver
socketServer.onEvent(action => {
  // console.log('action', action);
  // the defined action on corresponding key is called
  const result = bindedActions[action.type](action);
  console.log('result', result);

  // the server broadcasts the response to all clients
  // that are defined by an array of ids stored in the
  // targets property of the result object.
  if (Array.isArray(result.targets)) {
    const payload = omit(result, ['targets', 'userId']);
    result.targets.forEach(target => {
      socketServer.sendById(target, payload);
    });
  }
});
