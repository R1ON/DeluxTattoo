import { combineReducers } from 'redux';
import {
  isOpenRegistrationModalReducer,
  isOpenSingInModalReducer
} from './ModalReducers';

export default combineReducers({
  isOpenRegistrationModalReducer,
  isOpenSingInModalReducer
});
