import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import reducer from './../rootReducer';

const middleWares =
  process.env.NODE_ENV === 'development' ? [logger] : [];

const store = createStore(reducer, applyMiddleware(...middleWares));

export default store;
