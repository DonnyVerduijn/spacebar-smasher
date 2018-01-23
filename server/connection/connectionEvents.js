const actions = require('./connectionActions');
const responses = require('./connectionResponses');

const connectionEvents = {
  attach(socketServer) {

    socketServer.on('ESTABLISH_CONNECTION')
    .then(actions.establishConnection)
    .then(responses.connectionEstablished)
    .then((client, data) => {
      console.log(data);
    });

    socketServer.on('CLOSE_CONNECTION')
    .then(actions.closeConnection);

    socketServer.on('ERROR_CONNECTION')
    .then(actions.errorConnection);
  }
};

module.exports = connectionEvents;
