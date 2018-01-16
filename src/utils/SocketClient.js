import ResponseLogger from './ResponseLogger';

const ClientState = () => {
  let connectionAvailable = null;
  let id = null;

  const getConnectionAvailable = () => {
      return connectionAvailable;
    },
    getId = () => {
      return id;
    },
    setConnectionAvailable = value => {
      connectionAvailable = value;
    },
    setId = newId => {
      id = newId;
    };

  return {
    getId,
    setId,
    getConnectionAvailable,
    setConnectionAvailable
  };
};

const SocketClient = () => {
  let socket;
  const events = {};
  const clientState = ClientState(ClientState);
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
      console.log('CONNECTION_CLOSED', { clientId: clientState.getId() });
      // see if a close handler exists
      if (typeof events.CONNECTION_CLOSED === 'function') {
        // and call it if the case
        events.CONNECTION_CLOSED();
      }
      clientState.setConnectionAvailable(false);
      clientState.setId(null);
      // try to reconnect
      connect();
    },
    onError = error => {
      // if a handler exists
      console.log('CONNECTION_ERROR', error);
      if (typeof events.CONNECTION_ERROR === 'function') {
        // call it
        events.CONNECTION_ERROR(error);
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
        clientState.setId(data.payload.clientId);
        clientState.setConnectionAvailable(true);
      }
      if (typeof events[data.type] === 'function') {
        // call the attached event listener
        console.log(data.type, data.payload);
        events[data.type](data.payload);
      }
    },
    send = message => {
      if (clientState.getConnectionAvailable()) {
        socket.send(message);
      }
    };

  // connect on load
  connect();

  // expose public API endpoints
  return {
    on,
    send
  };
};

export default SocketClient;
