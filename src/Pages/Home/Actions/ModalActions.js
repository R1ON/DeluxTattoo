import {
  IS_OPEN_REGISTRATION_MODAL,
  IS_OPEN_SING_IN_MODAL
} from '../Constants';

export function isOpenRegistrationModalAction(isOpenRegistration) {
  return {
    type: IS_OPEN_REGISTRATION_MODAL,
    isOpenRegistration
  };
}

export function isOpenSingInModalAction(isOpenSingIn) {
  return {
    type: IS_OPEN_SING_IN_MODAL,
    isOpenSingIn
  };
}
