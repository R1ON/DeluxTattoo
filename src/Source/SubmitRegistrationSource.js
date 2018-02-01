import axios from 'axios';

import { URL_ACCOUNT } from '../Constants/Url';

export default {
  submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg }) {
    return axios.post(URL_ACCOUNT, {
      login: inputLoginReg,
      email: inputMailReg,
      password: inputPasswordReg
    });
  }
};
