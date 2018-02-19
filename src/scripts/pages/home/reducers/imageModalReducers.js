import {
  IS_OPEN_IMAGE_MODAL,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../constants/home';

const initialState = {
  isOpenImage: false,
  imageSrc: ''
};

export function isOpenImageModalReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_IMAGE_MODAL:
      return {
        ...state,
        isOpenImage: action.isOpenImage,
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
