// these actions are used only to send data to the server

export const createUser = user => {
  return {
    type: 'CREATE_USER',
    ...user
  };
};

export const updateUser = user => {
  return {
    type: 'UPDATE_USER',
    ...user
  };
};

export const validateUser = user => {
  return {
    type: 'VALIDATE_USER',
    ...user
  };
};
