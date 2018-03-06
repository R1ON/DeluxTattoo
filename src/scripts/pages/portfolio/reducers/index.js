import { combineReducers } from 'redux';

import { selectMasterReducer } from './selectMasterReducers';
import { isOpenSliderReducer } from './sliderReducers';
import { viewMoreReducer } from './viewMoreReducers';

export default combineReducers({
  selectMasterReducer,
  isOpenSliderReducer,
  viewMoreReducer
});
