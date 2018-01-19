import socketClient from './../utils/SocketClient';
import store from './createStore';
import * as actions from './connectionActions';


socketClient.on('CONNECTION_ESTABLISHED', (data) => {
  store.dispatch(actions.connectionEstablished(data));
});

socketClient.on('CONNECTION_ERROR', (data) => {
  store.dispatch(actions.connectionError(data));
});

socketClient.on('CONNECTION_CLOSED', (data) => {
  store.dispatch(actions.connectionClosed(data));
});

socketClient.on('PARSE_ERROR', (data) => {
  store.dispatch(actions.parseError(data));
});
