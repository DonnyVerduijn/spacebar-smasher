// Defines userReducer to process actions,
// regarding the state of the user object
import userState from './userState.json';

const userReducer = (user = userState, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      return Object.assign({}, user, {
        id: action.id,
        name: action.name
      });
    case 'USER_UPDATED':
      return user;
    case 'USER_VALIDATED':
      return Object.assign({}, user, {
        isValid: action.isValid,
        name: action.name
      });
    default:
      return user;
  }
};

export default userReducer;
