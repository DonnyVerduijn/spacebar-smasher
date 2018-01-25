// const socketServer = require('./../SocketServer');

const userResponses = {
  userValidated(user) {
    return {
      type: 'USER_VALIDATED',
      name: user.name,
      isValid: user.isValid
    };
  },
  userCreated(user) {
    return {
      type: 'USER_CREATED',
      id: user.id,
      name: user.name
    };
  }
};

module.exports = userResponses;
