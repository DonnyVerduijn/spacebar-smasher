export const getCurrentConnectionStatus = (state) => {
    return state.events[state.events.length].status;
};
