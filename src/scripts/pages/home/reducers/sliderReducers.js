import {
  IS_OPEN_SLIDER,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../constants/types';

const initialState = {
  isOpen: false,
  imageSrc: ''
};

export function isOpenSliderReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_SLIDER:
      return {
        ...state,
        isOpen: action.isOpen,
        imageSrc: parseInt(action.imageSrc.replace(/[^0-9]/g, ''), 10)
      };

    case SWITCH_IMAGE_LEFT:
      if (state.imageSrc === 1) {
	      return {
	      	...state,
		      imageSrc: 14
	      };
      }
      return {
        ...state,
        imageSrc: state.imageSrc - 1
      };

    case SWITCH_IMAGE_RIGHT:
      if (state.imageSrc === 14) {
	      return {
	      	...state,
		      imageSrc: 1
	      };
      }
      return {
        ...state,
        imageSrc: state.imageSrc + 1
      };

    default:
      return state;
  }
}
