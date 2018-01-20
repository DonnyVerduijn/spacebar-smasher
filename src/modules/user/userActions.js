
// these actions are used only to send data to the server

export const userCreated = () => {
    return { type: 'USER_CREATED' };
};

export const userUpdated = () => {
    return { type: 'USER_UPDATED' };
};

export const userValidated = ({ userNameAvailable }) => {
    return {
        type: 'USER_VALIDATED',
        userNameAvailable
    };
};
