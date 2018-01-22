const socketServer = require('./../SocketServer');

const userResponses = {
  userValidated(user) {
    socketServer.sendById(user.clientId,
      JSON.stringify({
        type: 'USER_VALIDATED',
        payload: {
          name: user.name,
          isValid: user.isValid
        }
      })
    );
  },
  userCreated(user) {
    socketServer.sendById(user.clientId,
      JSON.stringify({
        type: 'USER_CREATED',
        payload: {
          id: user.id,
          name: user.name
        }
      })
    );
  }
};

module.exports = userResponses;
