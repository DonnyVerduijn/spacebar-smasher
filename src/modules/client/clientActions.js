export const clientCreated = ({ id }) => {
  return {
    type: 'CLIENT_CREATED',
    id
  };
};

export const clientError = ({ id }) => {
  return {
    type: 'CLIENT_ERROR',
    id
  };
};

export const clientClosed = ({ id }) => {
  return {
    type: 'CLIENT_CLOSED',
    id
  };
};
