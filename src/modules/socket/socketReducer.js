import socketState from './socketState.json';
import SocketEventFactory from './SocketEventFactory';

const socketReducer = (state = socketState, action) => {
  switch (action.type) {
    case 'SOCKET_CONNECTED':
      return {
        ...state,
        events: [
          ...state.events,
          SocketEventFactory({ id: action.id, status: 'established' })
        ]
      };
    case 'SOCKET_ERROR':
      return {
        ...state,
        events: [
          ...state.events,
          SocketEventFactory({ id: action.id, status: 'error' })
        ]
      };
    case 'SOCKET_CLOSED':
      return {
        ...state,
        events: [
          ...state.events,
          SocketEventFactory({ id: action.id, status: 'closed' })
        ]
      };
    default:
      return state;
  }
};

export default socketReducer;
