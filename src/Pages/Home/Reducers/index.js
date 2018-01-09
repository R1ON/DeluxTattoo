import { combineReducers } from 'redux';
import { isOpenModalReducer } from './ModalReducers';
import { isOpenImageModalReducer } from './ImageModalReducers';

export default combineReducers({
  isOpenModalReducer,
  isOpenImageModalReducer
});
