import windowState from './windowState.json';


const windowReducer = (state = windowState, action) => {
  switch (action.type) {
    case 'LIST_ITEM_CLICKED':
      return { ...state, active: action.target };
    case 'SWITCH_WINDOW':
      return { ...state, active: action.target };
    default:
      return state;
  }
};

export default windowReducer;


