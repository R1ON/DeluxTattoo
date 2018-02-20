import {
  IS_OPEN_MODAL
} from '../constants/types';

export function isOpenModal(isOpenRegistration, isOpenSignIn) {
  return {
    type: IS_OPEN_MODAL,
    isOpenRegistration,
    isOpenSignIn
  };
}
