// implements selectors to access the current state
// used by container components

export const getIsValid = (state) => {
    return state.game.isValid;
};

export const getName = (state) => {
    return state.user.name;
};

export const getId = (state) => {
    return state.user.id;
};
