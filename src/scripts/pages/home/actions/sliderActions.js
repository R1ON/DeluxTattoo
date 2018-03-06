import {
  IS_OPEN_SLIDER,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../constants/types';
import { QUANTITY_IMAGE } from '../constants/home';

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
    imageSrc: imageSrc === QUANTITY_IMAGE.firstImage ? QUANTITY_IMAGE.lastImage : imageSrc - 1
  };
}

export function switchImageRight(imageSrc) {
  return {
    type: SWITCH_IMAGE_RIGHT,
    imageSrc: imageSrc === QUANTITY_IMAGE.lastImage ? QUANTITY_IMAGE.firstImage : imageSrc + 1
  };
}
