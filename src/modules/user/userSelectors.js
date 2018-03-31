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

export const getUserIds = (state) => {
    return Object.keys(state.users);
};

export const getUser = (state, id) => {
    return state.users[id];
};

export const getUserName = (state, id) => {
    return state.users[id] ? state.users[id].name : '';
};

export const getUserScore = (state, id) => {
    return state.users[id] ? state.users[id].score : null;
};
