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

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
// export function submitRegistration(validationModal) {
//   // тут вызываем аксиос и шлем всю хуйню на сервер
//
//   sleep(1000).then(() => {
//     return {
//       type: VALIDATION_MODAL,
//       validationModal
//     }
//   })
// }
