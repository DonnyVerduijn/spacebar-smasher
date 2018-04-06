// implements selectors to access the current state
// used by container components

export const getUserIds = (state, id) => {
    return state.games[id] ? state.games[id].joinedUsers : [];
};

export const getById = (state, id) => {
    return state.games[id];
};
