import {
  IS_OPEN_IMAGE_MODAL,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../Constants';


export function isOpenImageModalAction(isOpenImage, imageSrc) {
  return {
    type: IS_OPEN_IMAGE_MODAL,
    isOpenImage,
    imageSrc
  };
}

export function switchImageLeft() {
  return {
    type: SWITCH_IMAGE_LEFT
  };
}

export function switchImageRight() {
  return {
    type: SWITCH_IMAGE_RIGHT
  };
}
