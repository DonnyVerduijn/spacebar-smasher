export const getMostRecent = state => {
  return state.request.length > 0
    ? state.request[state.request.length - 1]
    : null;
};
