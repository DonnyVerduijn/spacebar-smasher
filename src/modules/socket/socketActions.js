export const socketCreated = ({ id }) => {
  return {
    type: 'SOCKET_CONNECTED',
    id
  };
};

export const socketError = ({ id }) => {
  return {
    type: 'SOCKET_ERROR',
    id
  };
};

export const socketClosed = ({ id }) => {
  return {
    type: 'SOCKET_CLOSED',
    id
  };
};
