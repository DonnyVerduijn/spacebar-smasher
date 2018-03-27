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
    case 'PAUSE_GAME':
    case 'RESUME_GAME':
    return {
      ...state,
      [action.id]: Object.assign({}, state[action.id], omit(action, 'type'))
    };
    case 'QUIT_GAME':
      return {};
    case 'AVAILABLE_GAMES':
      return {
        ...state,
        ...action.availableGames
      };
    case 'JOIN_GAME':
      return {
        ...state,
        [action.id]: Object.assign(
          {},
          state[action.id],
          omit(action, ['type', 'users'])
        )
      };
    default:
      return state;
  }
};

export default gameReducer;
