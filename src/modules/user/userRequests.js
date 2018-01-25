  export const createUser = (name) => ({
      type: 'CREATE_USER',
      name
  });

  export const updateUser = (user) => ({
      type: 'UPDATE_USER',
      ...user
  });

  export const validateUser = (name) => ({
      type: 'VALIDATE_USER',
      name
  });

