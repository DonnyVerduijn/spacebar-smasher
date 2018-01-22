const socketServer = require('./../SocketServer');

const connectionResponses = {
  establishConnection({ id }) {
    socketServer.sendById(id, {
      type: 'CONNECTION_ESTABLISHED',
      payload: { id }
    });
  }
};

module.exports = connectionResponses;
