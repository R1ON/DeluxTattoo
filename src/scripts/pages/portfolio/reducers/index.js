import { combineReducers } from 'redux';

import { selectMasterReducer } from './selectMasterReducers';
import { isOpenSliderReducer } from './sliderReducers';

export default combineReducers({
  selectMasterReducer,
  isOpenSliderReducer
});
