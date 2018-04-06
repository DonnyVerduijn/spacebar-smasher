// Defines userReducer to process actions,
// regarding the state of the user object

const userReducer = (state = {}, action) => {
  // console.log('action', action);
  switch (action.type) {
    case 'INSTANTIATE_USER':
    case 'VALIDATE_USER':
    case 'CONFIRM_USER':
    case 'UNCONFIRM_USER':
    case 'UPDATE_USER':
    case 'AVAILABLE_USERS':
    case 'DELETE_USER':
    case 'SEND_REQUEST':
    case 'CANCEL_REQUEST':
    case 'DENY_REQUEST':
    case 'ACCEPT_REQUEST':
      return {
        ...state,
        ...action.users
      };
    case 'SOCKET_CONNECTED':
      return action.users;
    case 'NAVIGATE_USER':
      return action.id
        ? {
            ...state,
            [action.id]: Object.assign(state[action.id], {
              currentWindow: action.location
            })
          }
        : {
            ...state,
            ...action.users
          };
    case 'QUIT_GAME':
      return {};
    default:
      return state;
  }
};

export default userReducer;
