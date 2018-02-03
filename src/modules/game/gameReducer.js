import omit from './../../utils/omit';

const gameReducer = (state = {}, action) => {
  // these actions are tunneled
  switch (action.type) {
    case 'INSTANTIATE_GAME':
    case 'VALIDATE_GAME':
    case 'CONFIRM_GAME':
    case 'START_GAME':
    case 'UPDATE_GAME':
    case 'LEAVE_GAME':
    case 'JOIN_GAME':
    case 'PAUSE_GAME':
    case 'RESUME_GAME':
    case 'QUIT_GAME':
      return {
        ...state,
        ...omit(action, 'type')
      };
    default:
      return state;
  }
};

export default gameReducer;
