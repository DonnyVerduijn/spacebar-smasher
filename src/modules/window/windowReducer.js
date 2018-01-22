import windowState from './windowState.json';

// const buttonMapping = {
//   MAIN: {
//     NEW_GAME_BTN: 'NEW_USER',
//     JOIN_GAME_BTN: 'NEW_USER',
//     HIGHSCORES_BTN: 'HIGHSCORES'
//   },
//   NEW_USER: {
//     BACK_BTN: 'MAIN',
//     NEXT_BTN: 'NEW_GAME'
//   },
//   NEW_GAME: {
//     BACK_BTN: 'NEW_USER',
//     NEXT_BTN: 'LOBBY'
//   },
//   LOBBY: {
//     BACK_BTN: 'NEW_GAME',
//     NEXT_BTN: 'NONE'
//   },
//   PAUSE: {
//     RESUME_BTN: 'NONE',
//     QUIT_BTN: 'MAIN',
//     TRY_AGAIN_BTN: 'NONE'
//   },
//   GAME_OVER: {
//     TRY_AGAIN_BTN: 'NONE',
//     QUIT_BTN: 'MAIN'
//   }
// };

// const getActiveWindow = (action) => {
//   return buttonMapping[action.windowId][action.itemId];
// };

const windowReducer = (state = windowState, action) => {
  switch (action.type) {
    case 'LIST_ITEM_CLICKED':
      return { ...state, active: action.target };
    case 'BACK_BUTTON_CLICKED':
      return { ...state, active: action.target };
    default:
      return state;
  }
};

export default windowReducer;


