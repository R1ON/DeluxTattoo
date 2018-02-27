import {
  IS_OPEN_SLIDER,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../constants/types';
import { QUANTITY_IMAGE } from '../constants/home';

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
        imageSrc: state.imageSrc === QUANTITY_IMAGE.firstImage ? QUANTITY_IMAGE.lastImage : state.imageSrc - 1
      };

    case SWITCH_IMAGE_RIGHT:
      return {
        ...state,
        imageSrc: state.imageSrc === QUANTITY_IMAGE.lastImage ? QUANTITY_IMAGE.firstImage : state.imageSrc + 1
      };

    default:
      return state;
  }
}
