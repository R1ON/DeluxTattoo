import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import {
  HomeReducers
} from '../Pages/Home';

export default combineReducers({
  routing: routerReducer,
  HomeReducers,

  form: formReducer
});