const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const uuid = require('uuid4');
// const ClientCollection = require('./ClientCollection');
const Rx = require('rxjs/Rx');
const HashMap = require('hashmap');

const SocketServer = () => {
  // const clients = ClientCollection();
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

    process.once('beforeExit', () => {
      server.close();
    });

    // instantiate websocket server
    const socketServer = new WebSocket.Server({ server });
    // listen for connection requests
    socketServer.on('connection', handlers.onConnection(handlers));
  };
  const onConnection = handlers => (socket, request) => {
    // dispatch event

    const id = uuid();
    sockets.set(id, socket);

    eventStream.next({
      type: 'CREATE_CLIENT',
      ipAddress: request.connection.remoteAddress,
      id
    });

    // when a message is received
    socket.on('message', handlers.onMessage(id));
    // when a socket error occurs
    socket.on('error', handlers.onError(id));
    // when a client closes its connection
    socket.on('close', handlers.onClose(id));
  };
  const onClose = id => () => {
    // remove it from the client collection
    eventStream.next({
      type: 'CLOSE_CLIENT',
      id
    });
  };
  const onError = id => () => {
    eventStream.next({
      type: 'ERROR_CLIENT',
      id
    });
  };
  const onMessage = id => message => {
    const data = JSON.parse(message);
    eventStream.next({
      type: data.type,
      id,
      data: data.payload
    });
  };

  // public API method implementation
  const attach = (events) => {
    events(publicApi);
  };
  const on = type => ({
    // specify fake then method
    then(resolve) {
      // return a new promise
      return {
        then(resolveNext) {
          eventStream.subscribe(event => {
            if (type === event.type) {
              const result = resolve(event.client, event.data);
              if (typeof resolveNext === 'function') {
                resolveNext(result);
              };
            }
          });
        }
      };
    }
  });

  // create websocket
  create({
    onConnection,
    onMessage,
    onError,
    onClose
  });
  // expose public API endpoints
  const publicApi = {
    attach,
    on
  };

  return publicApi;
};

module.exports = SocketServer;
