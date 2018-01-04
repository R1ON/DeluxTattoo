import {
  IS_OPEN_MODAL,
  IS_OPEN_IMAGE_MODAL
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
        imageSrc: action.imageSrc
      };

    default:
      return state;
  }
}