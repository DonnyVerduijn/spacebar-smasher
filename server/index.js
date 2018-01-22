
const SocketServer = require('./SocketServer');
const userEvents = require('./user/userEvents');
const gameEvents = require('./game/gameEvents');
const connectionEvents = require('./connection/connectionEvents');

// create SocketServer instance
// this instance uses a ClientCollection instance internally
// to support socket identification
const socketServer = SocketServer();

// attach events to the socket
// these events are fired when messages are received
connectionEvents.attach(socketServer);
userEvents.attach(socketServer);
gameEvents.attach(socketServer);


