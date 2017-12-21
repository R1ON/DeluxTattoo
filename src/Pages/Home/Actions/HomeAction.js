// export const fetchImage = () => dispatch => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//     const data = await response.json();
//
//     dispatch({
//       type: FETCH_IMAGE_SUCCESS,
//       payload: data
//     });
//   } catch (err) {
//     dispatch({
//       type: FETCH_IMAGE_FAILURE,
//       payload: err
//     });
//   }
// };
