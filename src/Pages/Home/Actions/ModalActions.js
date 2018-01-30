import SubmitRegistrationSource from '../../../Source/SubmitRegistrationSource';

import {
	IS_OPEN_MODAL
} from '../Constants';

export function isOpenModalAction(isOpenRegistration, isOpenSignIn) {
	return {
		type: IS_OPEN_MODAL,
		isOpenRegistration,
		isOpenSignIn
	};
}

export function submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg }) {
	SubmitRegistrationSource.submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg });

	return {
		type: "ZAEBIS",
		status: "OK"
	}
}
