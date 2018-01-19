import socketClient from './../utils/SocketClient';
import store from './createStore';
import * as actions from './userActions';

socketClient.on('USER_CREATED', (data) => {
    store.dispatch(actions.userCreated(data));
});

socketClient.on('USER_UPDATED', (data) => {
  store.dispatch(actions.userUpdated(data));
});
