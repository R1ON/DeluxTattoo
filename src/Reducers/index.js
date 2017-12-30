import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  homeReducers
} from '../Pages/Home';

export default combineReducers({
  routing: routerReducer,
  homeReducers
});