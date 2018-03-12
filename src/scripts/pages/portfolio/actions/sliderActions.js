import {
  IS_OPEN_SLIDER,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../constants/types';

export function isOpenSlider(isOpen, imageSrc, imageCount) {
  return {
    type: IS_OPEN_SLIDER,
    isOpen,
    imageSrc,
    imageCount
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
