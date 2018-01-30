// Defines selectors to interpret the data in the user object

export const getIsLocal = (state) => {
    return state.user.isLocal;
};

export const getIsValid = (state) => {
    return state.user.isValid;
};

export const getName = (state) => {
    return state.user.name;
};

export const getId = (state) => {
    return state.user.id;
};

export const getUser = (state, id) => {
    return state.user[id];
};
