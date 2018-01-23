export const getCurrentClientStatus = state => {
  return state.events[state.events.length].status;
};
