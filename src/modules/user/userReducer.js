// Defines userReducer to process actions,
// regarding the state of the user object
import userState from './userState.json';

const userReducer = (users = userState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return Object.assign({}, users, {
        id: action.id,
        name: action.name
      });
    case 'UPDATE_USER':
      return users;
    case 'VALIDATE_USER':
      return Object.assign({}, users, {
        isValid: action.isValid,
        name: action.name
      });
    default:
      return users;
  }
};

export default userReducer;
