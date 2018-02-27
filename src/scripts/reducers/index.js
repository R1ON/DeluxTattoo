import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { homeReducers } from '../pages/home';
import { portfolioReducers } from '../pages/portfolio';

import modalReducers from './modals';

export default combineReducers({
  homeReducers,
  portfolioReducers,
  modalReducers,
  form: formReducer
});
