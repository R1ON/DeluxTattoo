import axios from 'axios';

// import { URL_ACCOUNTS } from '../Constants/Url';

export default {
	submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg }) {
		return axios.post('http://localhost:3000/registration', {
			login: inputLoginReg,
			email: inputMailReg,
			password: inputPasswordReg
		})
			.then(response => console.log(response))
			.catch(error => console.log(error));
	}
};
