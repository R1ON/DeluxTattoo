import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  HomeReducers
} from '../Pages/Home';

export default combineReducers({
  routing: routerReducer,
  HomeReducers
});