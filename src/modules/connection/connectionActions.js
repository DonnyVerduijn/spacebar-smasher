export const connectionEstablished = ({ id }) => {
  return {
    type: 'CONNECTION_ESTABLISHED',
    id
  };
};

export const connectionError = ({ id }) => {
  return {
    type: 'CONNECTION_ERROR',
    id
  };
};

export const connectionClosed = ({ id }) => {
  return {
    type: 'CONNECTION_CLOSED',
    id
  };
};

export const parseError = () => {
  return { type: 'PARSE_ERROR' };
};