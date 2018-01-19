const connectionReducer = (state = {}, action) => {
  switch (action.type) {
      case 'CONNECTION_ESTABLISHED':
      return state;
      case 'CONNECTION_ERROR':
      return state;
      case 'CONNECTION_CLOSED':
    default:
      return state;
  }
};

export default connectionReducer;
