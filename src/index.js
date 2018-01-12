import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// WebSocket.onerror = (error) => {
//     console.log('ERROR', error);
//     return true;
// };
window.onerror = (message, url, lineNumber) => {
    console.log('ERROR', {
        message,
        url,
        lineNumber
    });
    return true;
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


