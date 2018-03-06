import {
  IS_OPEN_SLIDER,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../constants/types';

export function isOpenSlider(isOpen, imageSrc) {
  return {
    type: IS_OPEN_SLIDER,
    isOpen,
    imageSrc
  };
}

export function switchImageLeft(imageSrc) {
  return {
    type: SWITCH_IMAGE_LEFT,
    imageSrc: imageSrc === 1 ? 5 : imageSrc - 1
  };
}

export function switchImageRight(imageSrc) {
  return {
    type: SWITCH_IMAGE_RIGHT,
    imageSrc: imageSrc === 5 ? 1 : imageSrc + 1
  };
}
