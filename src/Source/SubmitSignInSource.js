import axios from 'axios';

import { URL_ACCOUNT } from '../Constants/Url';

export default {
  submitSignIn() {
    const test = axios.get(URL_ACCOUNT);
    const omg = test.then(res => {
      return res.data.filter(r => {
        if (r.login == 'test1')
          return r;
      })


    })

    return omg;
  }
};
