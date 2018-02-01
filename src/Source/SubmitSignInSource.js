import axios from 'axios';

import { URL_ACCOUNT } from '../Constants/Url';

export default {
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
