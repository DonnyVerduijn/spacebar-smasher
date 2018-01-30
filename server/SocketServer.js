const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const uuid = require('uuid4');
const Rx = require('rxjs/Rx');
const HashMap = require('hashmap');

const SocketServer = () => {
  const eventStream = new Rx.Subject();
  const sockets = new HashMap();

  const create = handlers => {
    const app = express(express);
    const server = http.createServer(app);

    // setup /api/status entrypoint
    app.get('/api/status', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ isAvailable: true }));
    });

    // run http-server
    server.listen(3001, () => {
      console.log('listening to 3001');
    });

    // close the server before the process is aborted
    process.once('beforeExit', () => {
      server.close();
    });

    // instantiate websocket server
    const socketServer = new WebSocket.Server({ server });
    // listen for connection requests
    socketServer.on('connection', handlers.onConnection(handlers));
  };
  const onConnection = handlers => (socket, request) => {
    // create id for socket
    const id = uuid();
    // store socket by id
    sockets.set(id, socket);

    // emit event with id
    eventStream.next({
      type: 'SOCKET_CONNECTED',
      ipAddress: request.connection.remoteAddress,
      id
    });

    // attach handlers with id
    socket.on('message', handlers.onMessage(id));
    socket.on('error', handlers.onError(id));
    socket.on('close', handlers.onClose(id));
  };
  // onClose handler
  const onClose = id => () => {
    eventStream.next({
      type: 'SOCKET_CLOSED',
      id
    });
    // delete the socket
    sockets.delete(id);
  };

  // onError handler
  const onError = id => () => {
    eventStream.next({
      type: 'SOCKET_ERROR',
      id
    });
  };

  // onMessage handler
  const onMessage = id => message => {
    console.log('message', message);
    const data = JSON.parse(message);
    eventStream.next({
      type: data.type,
      id,
      ...data
    });
  };

  // onEvent public API method
  const onEvent = callback => {
    eventStream.subscribe(event => {
      callback(event);
    });
  };

  // sendById public API method
  const sendById = (id, payload) => {
    sockets.get(id).send(JSON.stringify(payload));
  };

  // create websocket
  create({
    onConnection,
    onMessage,
    onError,
    onClose
  });

  // expose public API endpoint
  return {
    onEvent,
    sendById
  };
};

module.exports = SocketServer;
