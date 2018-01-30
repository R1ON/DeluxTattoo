import axios from 'axios';

import { URL_REGISTRATION } from '../Constants/Url';

export default {
	submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg }) {
		return axios.post(URL_REGISTRATION, {
			login: inputLoginReg,
			email: inputMailReg,
			password: inputPasswordReg
		});
	}
};
