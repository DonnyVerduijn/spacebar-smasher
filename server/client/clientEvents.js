const actions = require('./clientActions');
const responses = require('./clientResponses');

const clientEvents = server => {
  server
    .on('CREATE_CLIENT')
    .then(actions.createClient)
    .then(responses.clientCreated);

  server.on('CLOSE_CLIENT').then(actions.closeClient);

  server.on('ERROR_CLIENT').then(actions.errorClient);
};

module.exports = clientEvents;
