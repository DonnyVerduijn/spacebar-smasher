// Defines userReducer to process actions,
// regarding the state of the user object
import userState from './userState.json';

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      return state;
    case 'USER_UPDATED':
      return state;
    case 'USER_VALIDATED':
      console.log(action);
      return Object.assign({}, state, {
        userNameAvailable: action.userNameAvailable
      });
    default:
      return state;
  }
};

export default userReducer;
