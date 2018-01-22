
const actions = require('./userActions');
const responses = require('./userResponses');

const userEvents = {
  attach(socketServer) {
    socketServer
      .on('VALIDATE_USER')
      .then(actions.validateUser)
      .then(responses.userValidated);
    socketServer
      .on('CREATE_USER')
      .then(actions.createUser)
      .then(responses.userCreated);
  }
};

module.exports = userEvents;
