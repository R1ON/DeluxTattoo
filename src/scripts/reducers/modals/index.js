import { combineReducers } from 'redux';

import { isOpenModalReducer } from './modalReducers';
import { submitRegistrationReducer } from './submitRegistrationReducers';
import { submitSignInReducer } from './submitSignInReducers';

export default combineReducers({
  isOpenModalReducer,
  submitRegistrationReducer,
  submitSignInReducer
});
