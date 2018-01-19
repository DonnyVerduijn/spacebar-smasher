const windowState = 'windowState';

const windowReducer = (state = windowState, action) => {
  switch (action.type) {
    case 'MENU_ITEM_CLICKED':
      switch (action.menuId) {
        case 'MAIN_MENU':
          switch (action.itemId) {
            case 'NEW_GAME_BTN':
              return { ...state, activeWindow: 'NEW_USER' };
            case 'JOIN_GAME_BTN':
              return { ...state, activeWindow: 'AVAILABLE_GAMES' };
            case 'HIGHSCORES_BTN':
              return { ...state, activeWindow: 'HIGHSCORES' };
            default:
              return { ...state, activeWindow: 'MAIN_MENU' };
          }
        case 'NEW_USER_WINDOW':
          switch (action.itemId) {
            case 'BACK_BTN':
              return { ...state, activeWindow: 'MAIN_MENU' };
            case 'NEXT_BTN':
              return { ...state, activeWindow: 'NEW_GAME' };
            default:
              return { ...state, activeWindow: 'MAIN_MENU' };
          }
        case 'NEW_GAME_WINDOW':
          switch (action.itemId) {
            case 'BACK_BTN':
              return { ...state, activeWindow: 'NEW_USER' };
            case 'NEXT_BTN':
              return { ...state, activeWindow: 'LOBBY' };
            default:
              return { ...state, activeWindow: 'MAIN_MENU' };
          }
        case 'LOBBY_WINDOW':
          switch (action.itemId) {
            case 'BACK_BTN':
              return { ...state, activeWindow: 'NEW_GAME' };
            case 'NEXT_BTN':
              return { ...state, activeWindow: 'NONE' };
            default:
              return { ...state, activeWindow: 'MAIN_MENU' };
          }
        case 'PAUSE_WINDOW':
          switch (action.itemId) {
            case 'RESUME_BTN':
              return { ...state, activeWindow: 'NONE' };
            case 'QUIT_BTN':
              return { ...state, activeWindow: 'MAIN_MENU' };
            case 'TRY_AGAIN_BTN':
              return { ...state, activeWindow: 'NONE' };
            default:
              return { ...state, activeWindow: 'MAIN_MENU' };
          }
        default:
          return { ...state, activeWindow: 'MAIN_MENU' };
      }
    default:
      return state;
  }
};

export default windowReducer;
