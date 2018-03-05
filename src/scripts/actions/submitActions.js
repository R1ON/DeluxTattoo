import {
  SUBMIT_REGISTRATION,
  SUCCESS_SUBMIT_SIGN_IN
  // ERROR_SUBMIT_SIGN_IN
} from '../constants/types';

import submitSource from '../source/modalsSource';

export function submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg }) {
  submitSource.submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg });

  return {
    type: SUBMIT_REGISTRATION
  };
}

export function submitSignIn({ inputMailSign, inputPasswordSign }) {
  return (dispatch) => {
    const promise = submitSource.submitSignIn({ inputMailSign, inputPasswordSign });

    promise.then((response) => {
      if (response) {
        dispatch({ type: SUCCESS_SUBMIT_SIGN_IN });
      }

      // console.log(response)
      // если массив пустой, то сделать диспатч
      // else dispatch({ type: ERROR_SUBMIT_SIGN_IN });
    });
  };
}
