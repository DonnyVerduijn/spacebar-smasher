const SocketClient = () => {
  let socket;
  const events = {};

  // initialiaze socket
  const connect = () => {
      socket = new WebSocket('ws://localhost:3001');

      // on each received event
      socket.onmessage = message => {
        // parse the received message
        let data;
        try {
          data = JSON.parse(message.data);
        } catch (error) {
          data = {
            type: 'PARSE_ERROR',
            payload: { message: error.message }
          };
        }
        if (typeof events[data.type] === 'function') {
          // call the attached event listener
          events[data.type](data.payload);
        }
      };

      // when the socket closes
      socket.onclose = () => {
        // see if a close handler exists
        if (typeof events.CONNECTION_CLOSED === 'function') {
          // and call it if the case
          events.CONNECTION_CLOSED();
        }
      };
      // when there is a socket error
      socket.onerror = () => {
        // see if there is a error handler
        if (typeof events.CONNECTION_ERROR === 'function') {
          // and call it if the case
          events.CONNECTION_ERROR();
        }
        // throw Error(error.message);
      };
    },
    // define on method
    on = (type, callback) => {
      // attach callback by type as key
      events[type] = callback;
    },
    // define send method
    send = message => {
      // proxy function call to socket.send
      socket.send(message);
    };

  // connect on initialization
  connect();

  // expose public API endpoints
  return {
    on,
    send,
    connect
  };
};

// const socket = new WebSocket('ws://localhost:3001');
export default SocketClient;
