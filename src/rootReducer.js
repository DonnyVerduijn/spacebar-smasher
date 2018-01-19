// combines all the reducers into the root reducer

import { combineReducers } from 'redux';
import { userReducer } from './modules/user';
import { gameReducer } from './modules/game';
import { connectionReducer } from './modules/connection';
import { windowState } from './modules/window';

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    connection: connectionReducer,
    window: windowState
});

export default rootReducer;
