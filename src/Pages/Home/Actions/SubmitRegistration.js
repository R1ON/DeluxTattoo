import {
	SUBMIT_REGISTRATION_MODAL
} from '../Constants';

import SubmitRegistrationSource from '../../../Source/SubmitRegistrationSource';

export function submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg }) {
	SubmitRegistrationSource.submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg });

	return {
		type: SUBMIT_REGISTRATION_MODAL
	};
}
