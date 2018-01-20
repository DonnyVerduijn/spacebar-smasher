import socketClient from './../../utils/SocketClient';
import store from './../../utils/ReduxStore';
import * as actions from './userActions';

export default (function userEvents() {
  socketClient.on('USER_CREATED', user => {
    store.dispatch(actions.userCreated(user));
  });

  socketClient.on('USER_UPDATED', user => {
    store.dispatch(actions.userUpdated(user));
  });

  socketClient.on('USER_VALIDATED', user => {
    store.dispatch(actions.userValidated(user));
  });
}());
