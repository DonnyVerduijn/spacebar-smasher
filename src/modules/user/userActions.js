// these actions are used only to send data to the server
export const instantiateUser = options => {
  return {
    type: 'INSTANTIATE_USER',
    ...options
  };
};

export const confirmUser = options => {
  return {
    type: 'CONFIRM_USER',
    ...options
  };
};

export const unconfirmUser = options => {
  return {
    type: 'UNCONFIRM_USER',
    ...options
  };
};

export const updateUser = options => {
  return {
    type: 'UPDATE_USER',
    ...options
  };
};

export const validateUser = options => {
  return {
    type: 'VALIDATE_USER',
    ...options
  };
};

export const availableUsers = () => {
  return {
    type: 'AVAILABLE_USERS'
  };
};

export const deleteUser = () => {
  return {
    type: 'DELETE_USER'
  };
};

export const navigateUser = options => {
  return {
    type: 'NAVIGATE_USER',
    ...options
  };
};

