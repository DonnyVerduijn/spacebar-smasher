// combines all the reducers into the root reducer

import { combineReducers } from 'redux';
import { userReducer } from './modules/user';
import { gameReducer } from './modules/game';
import { socketReducer } from './modules/socket';
import { windowReducer } from './modules/window';

const rootReducer = combineReducers({
    users: userReducer,
    game: gameReducer,
    socket: socketReducer,
    window: windowReducer
});

export default rootReducer;
