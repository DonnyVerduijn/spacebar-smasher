// combines all the reducers into the root reducer

import { combineReducers } from 'redux';
import { userReducer } from './modules/user';
import { gameReducer } from './modules/game';
import { clientReducer } from './modules/client';
import { windowState } from './modules/window';

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    client: clientReducer,
    window: windowState
});

export default rootReducer;
