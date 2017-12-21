// export default (state = [], {type, payload}) => {
//   switch (type) {
//     case 'ADD_LINK_INFO':
//       return payload.map(data => Object.assign({},
//         {
//           'id': data.id,
//           'nickName': faker.internet.userName(),
//           'image': data.url,
//           'countPhoto': parseInt(Math.random() * 40 + 5)
//         })
//       );
//
//     default:
//       return state;
//   }
// }
