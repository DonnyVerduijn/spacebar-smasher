import windowState from './windowState.json';

const windowReducer = (state = windowState, action) => {
  switch (action.type) {
    case 'SOCKET_CONNECTED':
    case 'QUIT_GAME':
      return {
        ...state,
        localUserId: null,
        localGameId: null,
        events: [...state.events, { target: 'MAIN', createdAt: Date.now() }]
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
        localUserId: action.users[Object.keys(action.users)[0]].id
      };
    case 'INSTANTIATE_GAME':
    case 'JOIN_GAME':
      return {
        ...state,
        localGameId: action.games[Object.keys(action.games)[0]].id
      };
    case 'START_GAME':
    return {
      ...state,
      events: [
        ...state.events,
        { target: 'GAME', createdAt: Date.now() }
      ]
    };
    default:
      return state;
  }
};

export default windowReducer;
