import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';
import './index.css';
import App from './app/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import store from './utils/createStore';
import SocketClient from './utils/SocketClient';
import SocketProvider from './utils/SocketProvider';

// create socket and attach dispatch function
const socket = SocketClient();
socket.onEvent(store.dispatch);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider socket={socket}>
      <App />
    </SocketProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
