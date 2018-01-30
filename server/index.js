const SocketServer = require('./SocketServer');
const bindToSnakeCase = require('./utils/bindToSnakeCase');
// actions
const gameActions = require('./game/gameActions');
const userActions = require('./user/userActions');
const socketActions = require('./socket/socketActions');
// responses
const socketResponses = require('./socket/socketResponses');
const userResponses = require('./user/userResponses');
const gameResponses = require('./game/gameResponses');

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

// bind responses to snakeCase keyed object
const bindedResponses = bindToSnakeCase({
  ...socketResponses,
  ...userResponses,
  ...gameResponses
});

// console.log(bindedActions);
// console.log(bindedResponses);
// on every event from the socketserver
socketServer.onEvent(action => {
  // the defined action on corresponding key is called
  const result = bindedActions[action.type](action);
  // console.log('result', result);
  // the result is converted to the corresponding
  // response object.
  const response = bindedResponses[action.type](result);
  // the server broadcasts the response to all clients
  // that are defined by an array of ids stored in the
  // targets property of the response object.
  if (Array.isArray(result.targets)) {
    result.targets.forEach(target => {
      socketServer.sendById(target, response);
    });
  }
});
