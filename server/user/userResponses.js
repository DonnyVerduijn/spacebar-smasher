// const socketServer = require('./../SocketServer');

const userResponses = {
  validateUser(response) {
    return {
      type: 'VALIDATE_USER',
      name: response.name,
      isValid: response.isValid
    };
  },
  createUser(response) {
    return {
      type: 'CREATE_USER',
      id: response.id,
      name: response.name
    };
  }
};

module.exports = userResponses;
