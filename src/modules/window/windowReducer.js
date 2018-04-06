import windowState from './windowState.json';

const windowReducer = (state = windowState, action) => {
  switch (action.type) {
    case 'SOCKET_CONNECTED':
    case 'QUIT_GAME':
      return {
        ...state,
        localUserId: Object.keys(action.users)[0],
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
    // case 'SWITCH_WINDOW':
    //   return {
    //     ...state,
    //     events: [
    //       ...state.events,
    //       { target: action.target, createdAt: Date.now() }
    //     ]
    //   };
    case 'INSTANTIATE_USER':
      return {
        ...state,
        localUserId: action.users[Object.keys(action.users)[0]].id
      };
    case 'ACCEPT_REQUEST':
    case 'INSTANTIATE_GAME':
      return {
        ...state,
        localGameId: action.games[Object.keys(action.games)[0]].id,
        events: [...state.events, { target: 'LOBBY', createdAt: Date.now() }]
      };
    case 'SEND_REQUEST':
    return {
      ...state,
      events: [...state.events, { target: 'REQUEST', createdAt: Date.now() }]
    };
    case 'CANCEL_REQUEST':
    case 'DENY_REQUEST':
    return {
      ...state,
      events: [...state.events, { target: 'AVAILABLE_USERS', createdAt: Date.now() }]
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
