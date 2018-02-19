import axios from 'axios';

const URL_ACCOUNT = 'http://localhost:3000/account';

export default {
  submitRegistration({ inputLoginReg, inputMailReg, inputPasswordReg }) {
    return axios.post(URL_ACCOUNT, {
      login: inputLoginReg,
      email: inputMailReg,
      password: inputPasswordReg
    });
  },

  submitSignIn({ inputMailSign, inputPasswordSign }) {
    const users = axios.get(URL_ACCOUNT);

    const data = users.then(response => (
      response.data.filter((user) => {
        if (user.email === inputMailSign && user.password === inputPasswordSign) {
          return user;
        }
        return false;
      })
    ));

    return data;
  }
};
