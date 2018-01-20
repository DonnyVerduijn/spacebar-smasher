// these actions are used only to send data to the server

export const userCreated = user => {
  return {
    type: 'USER_CREATED',
    ...user
  };
};

export const userUpdated = user => {
  return {
    type: 'USER_UPDATED',
    ...user
  };
};

export const userValidated = user => {
  return {
    type: 'USER_VALIDATED',
    ...user
  };
};
