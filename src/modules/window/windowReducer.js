import windowState from './windowState.json';


const windowReducer = (state = windowState, action) => {
  switch (action.type) {
    case 'SOCKET_CONNECTED':
      return { ...state, active: 'MAIN' };
    case 'SOCKET_CLOSED':
      return { ...state, active: 'NO_CONNECTION' };
    case 'SWITCH_WINDOW':
      return { ...state, active: action.target };
    default:
      return state;
  }
};

export default windowReducer;


