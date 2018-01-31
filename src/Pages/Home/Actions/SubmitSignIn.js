import {
  SUCCESS_SUBMIT_SIGN_IN,
  ERROR_SUBMIT_SIGN_IN
} from '../Constants';

import SubmitSignInSource from '../../../Source/SubmitSignInSource';

export function submitSignIn({ inputMailSign, inputPasswordSign }) {
  const response = SubmitSignInSource.submitSignIn({ inputMailSign, inputPasswordSign });

  response.then((data) => {
    if (data) {
      return { type: SUCCESS_SUBMIT_SIGN_IN };
    }

    return {
      type: ERROR_SUBMIT_SIGN_IN,
      error: 'User is not found'
    };
  });
}
