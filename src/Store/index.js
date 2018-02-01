import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducers from '../Reducers';

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

export {
  store,
  history
};
