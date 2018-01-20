import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './../rootReducer';

const middleWares =
  process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk];

const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;
