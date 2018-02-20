import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { homeReducers } from '../pages/home';

import modalReducers from './modals';

export default combineReducers({
  homeReducers,
  modalReducers,
  form: formReducer
});
