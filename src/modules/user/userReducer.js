// Defines userReducer to process actions,
// regarding the state of the user object

const userReducer = (user = {}, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      return user;
    case 'USER_UPDATED':
      return user;
    default:
      return user;
  }
};

export default userReducer;
