import {
	SUBMIT_REGISTRATION_MODAL
} from '../Constants';

const initialState = {
	registrationStatus: false
};

export function submitRegistrationReducer(state = initialState, action) {
	switch (action.type) {
		case SUBMIT_REGISTRATION_MODAL:
			return {
				...state,
				registrationStatus: !state.registrationStatus
			};

		default:
			return state;
	}
}
