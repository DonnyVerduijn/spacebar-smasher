// Defines selectors to interpret the data in the users object

export const getIsValid = (state, id) => {
    return state.users[id].isValid;
};

export const getName = (state, id) => {
    return state.users[id].name;
};

export const getId = (state, id) => {
    return state.users[id].persistentId;
};

export const getUsers = (state) => {
    return state.users;
};

export const getUser = (state, id) => {
    return state.users[id];
};
