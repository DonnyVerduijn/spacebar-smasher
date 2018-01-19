import connectionState from './connectionState.json';
import ConnectionEventFactory from './ConnectionEventFactory';

const connectionReducer = (state = connectionState, action) => {
  switch (action.type) {
    case 'CONNECTION_ESTABLISHED':
      return {
        ...state,
        events: [
          ...state.events,
          ConnectionEventFactory({ id: action.id, status: 'established' })
        ]
      };
    case 'CONNECTION_ERROR':
      return {
        ...state,
        events: [
          ...state.events,
          ConnectionEventFactory({ id: action.id, status: 'error' })
        ]
      };
    case 'CONNECTION_CLOSED':
      return {
        ...state,
        events: [
          ...state.events,
          ConnectionEventFactory({ id: action.id, status: 'closed' })
        ]
      };
    default:
      return state;
  }
};

export default connectionReducer;
