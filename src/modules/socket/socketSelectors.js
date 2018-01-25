export const getCurrentSocketStatus = state => {
  return state.socket.events[state.socket.events.length].status;
};
