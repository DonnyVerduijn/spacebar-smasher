import windowState from './windowState.json';

const windowReducer = (state = windowState, action) => {
  switch (action.type) {
    case 'SOCKET_CONNECTED':
    case 'QUIT_GAME':
    return {
      ...state,
      events: [
        ...state.events,
        { target: 'MAIN', createdAt: Date.now() }
      ]
    };
    case 'SOCKET_CLOSED':
    return {
      ...state,
      events: [
        ...state.events,
        { target: 'NO_CONNECTION', createdAt: Date.now() }
      ]
    };
    case 'SWITCH_WINDOW':
      return {
        ...state,
        events: [
          ...state.events,
          { target: action.target, createdAt: Date.now() }
        ]
      };
    case 'INSTANTIATE_USER':
      return {
        ...state,
        localUserId: action.id
      };
    case 'INSTANTIATE_GAME':
    case 'JOIN_GAME':
      return {
        ...state,
        localGameId: action.id
      };
    default:
      return state;
  }
};

export default windowReducer;
