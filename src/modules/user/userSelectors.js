// Defines selectors to interpret the data in the user object


export const getNameAvailable = (state) => {
    return state.user.nameAvailable;
};

export const getName = (state) => {
    return state.user.name;
};
