import {
  IS_OPEN_MODAL,
  IS_OPEN_IMAGE_MODAL
} from '../Constants';

export function isOpenModalAction(isOpenRegistration, isOpenSingIn) {
  return {
    type: IS_OPEN_MODAL,
    isOpenRegistration, isOpenSingIn
  };
}

export function isOpenImageModalAction(isOpenImage, imageSrc) {
  return {
    type: IS_OPEN_IMAGE_MODAL,
    isOpenImage, imageSrc
  };
}
