// Defines selectors to interpret the data in the users object

export const getUserIds = (state) => {
    return Object.keys(state.users);
};

export const getById = (state, id) => {
    return id ? state.users[id] : null;
};

export const listUsers = (state) => {
    return state.users;
};
