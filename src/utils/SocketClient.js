import ResponseLogger from './ResponseLogger';

const ClientState = () => {
  const params = {
    connectionAvailable: {
      value: null,
      writable: true,
      enumerable: true,
      configurable: false
    },
    id: {
      value: null,
      writable: true,
      enumerable: true,
      configurable: false
    }
  };

  return Object.create({}, params);
};

export default (function SocketClient() {
  let socket;
  const events = {};
  const client = ClientState();
  const responseLogger = ResponseLogger();

  // initialiaze socket
  const connect = () => {
      fetch('/api/status').then(response => {
        if (response.ok) {
          // create a new socket instance
          instantiateSocket('ws://localhost:3001');
        } else if (responseLogger.consecutiveRejections() < 10) {
          // try reconnecting for ten times
          setTimeout(connect, 1000);
        } else if (responseLogger.consecutiveRejections() < 15) {
          // try reconnecting each ten seconds
          setTimeout(connect, 10000);
        } else {
          // try connect each minute
          setTimeout(connect, 60000);
        }
        // always log the response
        responseLogger.log(response);
      });
    },
    getConnectionAvailable = () => {
      return client.connectionAvailable;
    },
    getId = () => {
      return client.id;
    },
    instantiateSocket = serverAddress => {
      socket = new WebSocket(serverAddress);
      socket.onmessage = onMessage;
      socket.onclose = onClose;
      socket.onerror = onError;
    },
    // Public API implementation
    // SocketServer.on(String, Function)
    on = (type, callback) => {
      events[type] = callback;
    },
    onClose = () => {
      // console.log('CONNECTION_CLOSED', { clientId: client.getId() });
      // see if a close handler exists
      if (typeof events.CONNECTION_CLOSED === 'function') {
        // and call it if the case
        events.CONNECTION_CLOSED(client);
      }
      client.connectionAvailable = false;
      client.id = null;
      // try to reconnect
      connect();
    },
    onError = error => {
      // if a handler exists
      // console.log('CONNECTION_ERROR', error);
      if (typeof events.CONNECTION_ERROR === 'function') {
        // call it
        events.CONNECTION_ERROR(client, error);
      }
    },
    onMessage = message => {
      // create a variable to store the received data
      let data;
      try {
        // try to parse the data (assuming JSON formatting)
        data = JSON.parse(message.data);
      } catch (error) {
        // if it fails return a PARSE_ERROR message
        data = {
          type: 'PARSE_ERROR',
          payload: { message: error.message }
        };
      }
      if (data.type === 'CONNECTION_ESTABLISHED') {
        client.id = data.payload.id;
        client.connectionAvailable = true;
      }
      if (typeof events[data.type] === 'function') {
        // call the attached event listener
        // console.log(data.type, data.payload);
        events[data.type](data.payload);
      }
    },
    send = message => {
      if (client.connectionAvailable) {
        socket.send(JSON.stringify(message));
      }
    };

  // connect on load
  connect();

  // expose public API endpoints
  return {
    on,
    send,
    getId,
    getConnectionAvailable
  };
}());
