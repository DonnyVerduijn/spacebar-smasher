// these actions are used only to send data to the server
export const instantiateUser = user => {
  return {
    type: 'INSTANTIATE_USER',
    ...user
  };
};

export const confirmUser = user => {
  return {
    type: 'CONFIRM_USER',
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
