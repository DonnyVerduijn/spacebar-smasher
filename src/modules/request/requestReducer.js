const requestReducer = (state = [], action) => {
  switch (action.type) {
    case 'CANCEL_REQUEST':
    case 'DENY_REQUEST':
    case 'ACCEPT_REQUEST':
    case 'SEND_REQUEST':
      return [...state, action.request];
    default:
      return state;
  }
};

export default requestReducer;
