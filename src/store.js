import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import promise from 'redux-promise';
//import createLogger from 'redux-logger';

import reducers from './reducers';

//const logger = createLogger()
//const store = createStore(reducers, applyMiddleware(thunk, promise, logger));
const store = createStore(reducers);

export default store;
