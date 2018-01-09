import {
  IS_OPEN_MODAL,
  IS_OPEN_IMAGE_MODAL,
  SWITCH_IMAGE_LEFT,
  SWITCH_IMAGE_RIGHT
} from '../Constants';

export function isOpenModalAction(isOpenRegistration, isOpenSignIn) {
  return {
    type: IS_OPEN_MODAL,
    isOpenRegistration, isOpenSignIn
  };
}

export function isOpenImageModalAction(isOpenImage, imageSrc) {
  return {
    type: IS_OPEN_IMAGE_MODAL,
    isOpenImage, imageSrc
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

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
// export function submitRegistration(validationModal) {
//   // тут вызываем аксиос и шлем всю хуйню на сервер
//
//   sleep(1000).then(() => {
//     return {
//       type: VALIDATION_MODAL,
//       validationModal
//     }
//   })
// }
