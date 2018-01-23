import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';
import './index.css';
import App from './app/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import store from './utils/ReduxStore';
import SocketClient from './utils/SocketClient';
import { clientEvents, clientActions } from './modules/client';
import { userEvents, userActions } from './modules/user';
import { gameEvents, gameActions } from './modules/game';

const socketClient = SocketClient();
socketClient.attach((client) => clientEvents(client, store.dispatch, clientActions));
socketClient.attach((client) => userEvents(client, store.dispatch, userActions));
socketClient.attach((client) => gameEvents(client, store.dispatch, gameActions));

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
