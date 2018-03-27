import omit from './../../utils/omit';
// Defines userReducer to process actions,
// regarding the state of the user object

const cloneState = (state, { without }) => {
  const clone = Object.assign({}, state);
  without.forEach(key => {
    Reflect.deleteProperty(clone, key);
  });
};

const userReducer = (state = {}, action) => {
  // console.log('action', action);
  switch (action.type) {
    case 'INSTANTIATE_USER':
    case 'VALIDATE_USER':
    case 'CONFIRM_USER':
    case 'UPDATE_USER':
      return {
        ...state,
        [action.id]: Object.assign({}, state[action.id], omit(action, 'type'))
      };
    case 'DELETE_USER':
      return cloneState(state, {
        without: [action.id]
      });
    case 'JOIN_GAME':
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
};

export default userReducer;
