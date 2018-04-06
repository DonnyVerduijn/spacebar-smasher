
const gameReducer = (state = {}, action) => {
  // these actions are tunneled
  switch (action.type) {
    case 'INSTANTIATE_GAME':
    case 'VALIDATE_GAME':
    case 'CONFIRM_GAME':
    case 'START_GAME':
    case 'UPDATE_GAME':
    case 'LEAVE_GAME':
    case 'PAUSE_GAME':
    case 'RESUME_GAME':
    case 'AVAILABLE_GAMES':
    case 'JOIN_GAME':
    case 'ACCEPT_REQUEST':
      return action.games;
    case 'SOCKET_CONNECTED':
    case 'QUIT_GAME':
    return {};
    default:
      return state;
  }
};

export default gameReducer;
