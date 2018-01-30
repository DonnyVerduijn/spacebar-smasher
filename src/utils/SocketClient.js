import ResponseLogger from './ResponseLogger';
import { Subject } from 'rxjs/Subject';

const SocketClient = () => {
  let socket;
  const eventStream = new Subject();
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
    onClose = () => {
      eventStream.next({
        type: 'CLIENT_CLOSED'
      });
      connect();
    },
    onError = error => {
      eventStream.next({
        type: 'CLiENT_ERROR',
        message: error.message
      });
    },
    onEvent = (callback) => {
      eventStream.subscribe(event => {
        callback(event);
      });
    },
    onMessage = message => {
      // create a variable to store the received data
      const data = JSON.parse(message.data);
      eventStream.next(data);
    },
    send = message => {
        console.log('message', message);
        socket.send(JSON.stringify(message));
    };

  // connect on load
  connect();

  const publicApi = {
    onEvent,
    send
  };

  return publicApi;
};

export default SocketClient;
