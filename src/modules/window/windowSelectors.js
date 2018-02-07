export const getActiveWindow = state => {
  const index = state.window.events.length - 1;
  return state.window.events[index]
    ? state.window.events[index].target
    : undefined;
};

export const getPreviousWindow = state => {
  const index = state.window.events.length - 2;
  return state.window.events[index]
  ? state.window.events[index].target
  : undefined;
};

export const getLocalUserId = state => {
  return state.window.localUserId;
};

export const getLocalGameId = state => {
  return state.window.localGameId;
};
