// implements selectors to access the current state
// used by container components

export const getIsValid = (state) => {
    return state.game.isValid;
};

export const getName = (state) => {
    return state.game.name || '';
};

export const getId = (state) => {
    return state.game.id;
};

export const getJoinedUsers = (state) => {
    return state.game.users;
};

export const getGame = (state) => {
    return state.game;
};
