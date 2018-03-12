import {
  IS_OPEN_SLIDER,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../constants/types';
import { MASTER_OPTION } from '../constants/portfolio';

const initialState = {
  isOpen: false,
  imageSrc: 0,
  imageCount: 0
};

export function isOpenSliderReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_SLIDER:
      return {
        ...state,
        isOpen: action.isOpen,
        imageSrc: action.imageSrc,
        imageCount: action.imageCount
      };

    case SWITCH_IMAGE_LEFT:
      return {
        ...state,
        imageSrc: state.imageSrc === MASTER_OPTION.firstImage ? state.imageCount : state.imageSrc - 1
      };

    case SWITCH_IMAGE_RIGHT:
      return {
        ...state,
        imageSrc: state.imageSrc === state.imageCount ? MASTER_OPTION.firstImage : state.imageSrc + 1
      };

    default:
      return state;
  }
}
