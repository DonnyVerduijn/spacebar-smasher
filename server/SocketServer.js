const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const uuid = require('uuid4');
const ClientCollection = require('./ClientCollection');
const ClientFactory = require('./ClientFactory');

const SocketServer = () => {
  const clientCollection = ClientCollection();
  const eventListeners = {};

  const initialize = () => {
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

    // instantiate websocket server
    const socketServer = new WebSocket.Server({ server });
    // listen for connection requests
    socketServer.on('connection', onConnection);
  };

  const broadcast = message => {
      // for each client
      clientCollection.forEach(client => {
        // send the specified message
        client.getSocket().send(message);
      });
    },
    on = (type, callback) => {
      // store specified callback by type
      eventListeners[type] = callback;
    },
    onClose = socketId => {
      return () => {
        // remove it from the client collection
        clientCollection.removeById(socketId);
        // if a corresponding event handler exists
        if (typeof eventListeners.CONNECTION_CLOSED === 'function') {
          // call it
          eventListeners.CONNECTION_CLOSED(socketId);
        }
      };
    },
    onConnection = (socket, request) => {
      const socketId = uuid();
      const newClient = ClientFactory({
        id: socketId,
        ipAddress: request.connection.remoteAddress,
        socket
      });
      // add new client to collection
      clientCollection.add(newClient);
      console.log('CONNECTION_ESTABLISHED', newClient.getId());
      console.log('CLIENTS CONNECTED: ', clientCollection.size());

      // if connection handler exists
      if (typeof eventListeners.CONNECTION_ESTABLISHED === 'function') {
        // call it with the new client and socket
        eventListeners.CONNECTION_ESTABLISHED(newClient, socket);
      }

      // when a message is received
      socket.on('message', onMessage);
      // when a socket error occurs
      socket.on('error', onError(socket));
      // when a client closes its connection
      socket.on('close', onClose(socketId));
    },
    onError = socket => {
      return error => {
        // if a CLIENT_ERROR event handler exists
        if (typeof eventListeners.CONNECTION_ERROR === 'function') {
          // call it with the error event
          eventListeners.CONNECTION_ERROR(error, socket);
        }
        // terminate the socket
        socket.terminate();
      };
    },
    onMessage = message => {
      let data;
      try {
        // try to parse the message
        data = JSON.parse(message);
      } catch (error) {
        // and create a parse error message
        // if it fails
        data = {
          type: 'PARSE_ERROR',
          payload: { message: error.message }
        };
      }
      // when a event exists for the specified type property
      if (typeof eventListeners[data.type] === 'function') {
        // call the attached event listener
        eventListeners[data.type](data.payload);
      }
    },
    sendById = (id, message) => {
      // for the client with the specified id
      clientCollection
        .getById(id)
        .getSocket()
        .send(message);
      // send the specified message
    };

  initialize();
  // expose public API endpoints
  return {
    on,
    sendById,
    broadcast
  };
};

module.exports = SocketServer;
