// Defines userReducer to process actions,
// regarding the state of the user object
import userState from './userState.json';

const userReducer = (user = userState, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      return user;
    case 'USER_UPDATED':
      return user;
    case 'USER_VALIDATED':
      console.log(action);
      return Object.assign({}, user, {
        nameAvailable: action.nameAvailable,
        name: action.name
      });
    default:
      return user;
  }
};

export default userReducer;
