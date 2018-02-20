import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducers from '../reducers';

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)));

export {
  store
};
