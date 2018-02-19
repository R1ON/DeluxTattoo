import {
  SUBMIT_REGISTRATION
} from '../pages/home/constants/home';

import SubmitRegistrationSource from '../source/modalsSource';

export function submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg }) {
  SubmitRegistrationSource.submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg });

  return {
    type: SUBMIT_REGISTRATION
  };
}
