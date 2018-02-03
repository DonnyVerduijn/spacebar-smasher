import omit from './../../utils/omit';
// Defines userReducer to process actions,
// regarding the state of the user object

const cloneState = (state, { without }) => {
  const clone = Object.assign({}, state);
  without.forEach(key => {
    Reflect.deleteProperty(clone, key);
  });
};

const userReducer = (users = {}, action) => {
  // console.log('action', action);
  switch (action.type) {
    case 'INSTANTIATE_USER':
    case 'CONFIRM_USER':
    case 'UPDATE_USER':
    case 'VALIDATE_USER':
      return {
        ...users,
        [action.id]: Object.assign({}, users[action.id], omit(action, 'type'))
      };
    case 'DELETE_USER':
      return cloneState(users, {
        without: [action.id]
      });
    default:
      return users;
  }
};

export default userReducer;
