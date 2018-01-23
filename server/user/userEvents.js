const actions = require('./userActions');
const responses = require('./userResponses');

const userEvents = server => {
  server
    .on('VALIDATE_USER')
    .then(actions.validateUser)
    .then(responses.userValidated);
  server
    .on('CREATE_USER')
    .then(actions.createUser)
    .then(responses.userCreated);
};

module.exports = userEvents;
