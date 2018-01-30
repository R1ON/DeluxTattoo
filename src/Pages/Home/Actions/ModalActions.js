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
