export const getCurrentSocketStatus = state => {
  return state.socket.events[state.socket.events.length - 1].status;
};

export const getId = state => {
  const index = state.socket.events.length;
  return index ? state.socket.events[index - 1].id : undefined;
};

export const getReconnectTimeout = () => {
  return '1';
};
