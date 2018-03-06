import {
  IS_OPEN_SLIDER,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../constants/types';

const initialState = {
  isOpen: false,
  imageSrc: 0
};

export function isOpenSliderReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_SLIDER:
      return {
        ...state,
        isOpen: action.isOpen,
        imageSrc: action.imageSrc
      };

    case SWITCH_IMAGE_LEFT:
      return {
        ...state,
        imageSrc: action.imageSrc
      };

    case SWITCH_IMAGE_RIGHT:
      return {
        ...state,
        imageSrc: action.imageSrc
      };

    default:
      return state;
  }
}
