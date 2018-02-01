import {
  SUCCESS_SUBMIT_SIGN_IN
  // ERROR_SUBMIT_SIGN_IN
} from '../Constants';

import SubmitSignInSource from '../../../Source/SubmitSignInSource';

export function submitSignIn({ inputMailSign, inputPasswordSign }) {
  return (dispatch) => {
    const promise = SubmitSignInSource.submitSignIn({ inputMailSign, inputPasswordSign });

    promise.then((response) => {
      if (response) {
        dispatch({ type: SUCCESS_SUBMIT_SIGN_IN });
      }
      // если массив пустой, то сделать диспатч
      // else dispatch({ type: ERROR_SUBMIT_SIGN_IN });
    });
  };
}
