// Defines selectors to interpret the data in the user object


export const getIsValid = (state) => {
    return state.user.isValid;
};

export const getName = (state) => {
    return state.user.name;
};

export const getId = (state) => {
    return state.user.id;
};
