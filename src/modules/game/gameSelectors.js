// implements selectors to access the current state
// used by container components

export const getIsValid = (state, id) => {
    return state.games[id].isValid;
};

export const getName = (state, id) => {
    return state.games[id] ? state.games[id].name : '';
};

export const getId = (state, id) => {
    return state.games[id].id;
};

export const getGameUsers = (state, id) => {
    return state.games[id] ? state.games[id].users : [];
};

export const getGameName = (state, id) => {
    return state.games[id] ? state.games[id].name : '';
};

export const getGame = (state, id) => {
    return state.games[id];
};

export const getAllGames = (state) => {
    return Object.keys(state.games).map(key => state.games[key]);
};
