import { combineReducers } from 'redux';

import { isOpenModalReducer } from './ModalReducers';
import { isOpenImageModalReducer } from './ImageModalReducers';
import { submitRegistrationReducer } from './SubmitRegistrationReducers';
import { submitSignInReducer } from './SubmitSignInReducers';

export default combineReducers({
  isOpenModalReducer,
  isOpenImageModalReducer,
  submitRegistrationReducer,
  submitSignInReducer
});
