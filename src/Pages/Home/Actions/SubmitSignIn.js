import {
  SUBMIT_SIGN_IN
} from '../Constants';

import SubmitSignInSource from '../../../Source/SubmitSignInSource';

export function submitSignIn() {
  const response = SubmitSignInSource.submitSignIn();

  response.then(t => console.log('ЭКШН', t))



  return {
    type: SUBMIT_SIGN_IN
  };
}
