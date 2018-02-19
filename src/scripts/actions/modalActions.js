import {
  IS_OPEN_MODAL
} from '../pages/home/constants/home';

export function isOpenModalAction(isOpenRegistration, isOpenSignIn) {
  return {
    type: IS_OPEN_MODAL,
    isOpenRegistration,
    isOpenSignIn
  };
}
