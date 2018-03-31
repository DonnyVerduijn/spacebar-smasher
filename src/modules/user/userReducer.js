// Defines userReducer to process actions,
// regarding the state of the user object

const userReducer = (state = {}, action) => {
  // console.log('action', action);
  switch (action.type) {
    case 'INSTANTIATE_USER':
    case 'VALIDATE_USER':
    case 'CONFIRM_USER':
    case 'UPDATE_USER':
    case 'LEAVE_GAME':
    case 'JOIN_GAME':
      return action.users;
    case 'SOCKET_CONNECTED':
    case 'QUIT_GAME':
      return {};
    default:
      return state;
  }
};

export default userReducer;
