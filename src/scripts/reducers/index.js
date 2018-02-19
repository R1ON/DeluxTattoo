import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { HomeReducers } from '../pages/home';

import modalReducers from './modals';

export default combineReducers({
  HomeReducers,
  modalReducers,
  form: formReducer
});
