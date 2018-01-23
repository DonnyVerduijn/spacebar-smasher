
const SocketServer = require('./SocketServer');
const userEvents = require('./user/userEvents');
const gameEvents = require('./game/gameEvents');
const clientEvents = require('./client/clientEvents');

// create SocketServer instance
// this instance uses a ClientCollection instance internally
// to support socket identification
const socketServer = SocketServer();

// attach events to the socket
// these events are fired when messages are received
socketServer.attach(clientEvents);
socketServer.attach(userEvents);
socketServer.attach(gameEvents);


