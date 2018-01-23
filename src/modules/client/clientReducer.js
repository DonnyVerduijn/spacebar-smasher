import clientState from './clientState.json';
import ClientEventFactory from './ClientEventFactory';

const clientReducer = (state = clientState, action) => {
  switch (action.type) {
    case 'CONNECTION_ESTABLISHED':
      return {
        ...state,
        events: [
          ...state.events,
          ClientEventFactory({ id: action.id, status: 'established' })
        ]
      };
    case 'CONNECTION_ERROR':
      return {
        ...state,
        events: [
          ...state.events,
          ClientEventFactory({ id: action.id, status: 'error' })
        ]
      };
    case 'CONNECTION_CLOSED':
      return {
        ...state,
        events: [
          ...state.events,
          ClientEventFactory({ id: action.id, status: 'closed' })
        ]
      };
    default:
      return state;
  }
};

export default clientReducer;
