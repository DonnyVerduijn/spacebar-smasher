import socketClient from './../utils/SocketClient';

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
    payload: {
      user,
      clientId: socketClient.getId()
    }
  });
};
