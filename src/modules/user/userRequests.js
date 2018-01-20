import socketClient from './../../utils/SocketClient';

export const createUser = name => {
  socketClient.send({
    type: 'CREATE_USER',
    payload: {
      name,
      clientId: socketClient.getId(),
      local: true
    }
  });
};

export const updateUser = user => {
  socketClient.send({
    type: 'UPDATE_USER',
    payload: user
  });
};

export const validateUser = user => {
  socketClient.send({
    type: 'VALIDATE_USER',
    payload: user
  });
};
