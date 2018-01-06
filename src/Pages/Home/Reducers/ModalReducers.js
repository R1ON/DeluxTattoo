import {
  IS_OPEN_MODAL,
  IS_OPEN_IMAGE_MODAL,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../Constants';

const initialState = {
  isOpenRegistration: false,
  isOpenSingIn: false,
  isOpenImage: false,
  imageSrc: ''
};

export function isOpenModalReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_MODAL:
      return {
        ...state,
        isOpenRegistration: action.isOpenRegistration,
        isOpenSingIn: action.isOpenSingIn
      };

    case IS_OPEN_IMAGE_MODAL:
      return {
        ...state,
        isOpenImage: action.isOpenImage,
        imageSrc: parseInt(action.imageSrc.replace(/[^0-9]/g, ''))
      };

    case SWITCH_IMAGE_LEFT:
      if (state.imageSrc === 1)
        return {...state, imageSrc: 14};

      return {
        ...state,
        imageSrc: state.imageSrc - 1
      };

    case SWITCH_IMAGE_RIGHT:
      if (state.imageSrc === 14)
        return {...state, imageSrc: 1};

      return {
        ...state,
        imageSrc: state.imageSrc + 1
      };

    default:
      return state;
  }
}