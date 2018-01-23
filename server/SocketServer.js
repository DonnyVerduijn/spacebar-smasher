const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const uuid = require('uuid4');
const ClientCollection = require('./ClientCollection');
const Rx = require('rxjs/Rx');

const SocketServer = () => {
  const clientCollection = ClientCollection();
  const eventListeners = {};
  const eventStream = new Rx.Subject();

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

    process.once('beforeExit', () => {
      server.close();
    });

    // instantiate websocket server
    const socketServer = new WebSocket.Server({ server });
    // listen for connection requests
    socketServer.on('connection', onConnection);
  };
  const onConnection = (socket, request) => {
    // create new client object
    const client = {
      id: uuid(),
      ipAddress: request.connection.remoteAddress,
      socket
    };
    // add new client to collection
    clientCollection.add(client);

    eventStream.next({
      type: 'ESTABLISH_CONNECTION',
      client
    });

    // when a message is received
    socket.on('message', onMessage(client));
    // when a socket error occurs
    socket.on('error', onError(client));
    // when a client closes its connection
    socket.on('close', onClose(client));
  };
  const onClose = client => {
    return () => {
      console.log('CONNECTION_CLOSED', client.id);
      // remove it from the client collection
      clientCollection.removeById(client.id);
      eventStream.next({
        type: 'ERROR_CONNECTION',
        client
      });
    };
  };
  const onError = client => {
    return error => {
      console.log('CONNECTION_ERROR', client.id);
      // terminate the socket
      clientCollection.getById(client.id).socket.terminate();
      eventStream.next({
        type: 'ERROR_CONNECTION',
        client,
        error
      });
    };
  };
  const onMessage = client => {
    return message => {
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

      // call the attached event listener
      eventListeners[data.type](client, data.payload);
      eventStream.next({
        type: data.type,
        client,
        data: data.payload
      });
    };
  };

  // public API method implementation
  const sendById = (id, message) => {
    // for the client with the specified id
    clientCollection.getById(id).socket.send(JSON.stringify(message));
    // send the specified message
  };
  const broadcast = message => {
    // for each client
    clientCollection.forEach(client => {
      // send the specified message
      client.getSocket().send(message);
    });
  };
  const on = type => {
    return {
      then(resolve) {
        return new Promise(resolveAfter => {
          eventStream.subscribe(event => {
            if (type === event.type) {
              resolveAfter(resolve(event.client, event.data));
            };
          });
        });
      }
    };
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
