import {
  CONST_NAME
} from '../constants/constants';


export default (state = [], {type, payload}) => {
  switch (type) {
    case CONST_NAME:
      return payload.map(data => Object.assign({},
        {
          'id': data.id,
          'nickName': faker.internet.userName(),
          'image': data.url,
          'countPhoto': parseInt(Math.random() * 40 + 5)
        })
      );

    default:
      return state;
  }
}
