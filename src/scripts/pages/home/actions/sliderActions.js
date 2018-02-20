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
