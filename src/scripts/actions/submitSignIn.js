import {
  SUCCESS_SUBMIT_SIGN_IN
  // ERROR_SUBMIT_SIGN_IN
} from '../pages/home/constants/home';

import SubmitSignInSource from '../source/modalsSource';

export function submitSignIn({ inputMailSign, inputPasswordSign }) {
  return (dispatch) => {
    const promise = SubmitSignInSource.submitSignIn({ inputMailSign, inputPasswordSign });

    promise.then((response) => {
      if (response) {
        dispatch({ type: SUCCESS_SUBMIT_SIGN_IN });
      }

      console.log(response)
      // если массив пустой, то сделать диспатч
      // else dispatch({ type: ERROR_SUBMIT_SIGN_IN });
    });
  };
}
