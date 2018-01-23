import socketClient from './../../utils/SocketClient';

export const createUser = user => {
  socketClient.send({
    type: 'CREATE_USER',
    payload: {
      name: user.name
    }
  });
};

export const updateUser = user => {
  socketClient.send({
    type: 'UPDATE_USER',
    payload: user
  });
};

export const validateUser = name => {
  socketClient.send({
    type: 'VALIDATE_USER',
    payload: { name }
  });
};
