// import files
import clientReducer from './clientReducer';
// initializes events singleton
import clientEvents from './clientEvents';
// connection selectors
import clientSelectors from './clientSelectors';

import clientActions from './clientActions';
// create public api
export { clientActions, clientReducer, clientEvents, clientSelectors };
