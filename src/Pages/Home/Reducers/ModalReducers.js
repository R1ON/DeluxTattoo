import {
  IS_OPEN_MODAL
} from '../Constants';

const initialState = {
  isOpenRegistration: false,
  isOpenSingIn: false
};

export function isOpenModalReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_MODAL:
      return {
        ...state,
        isOpenRegistration: action.isOpenRegistration,
        isOpenSingIn: action.isOpenSingIn
      };

    default:
      return state;
  }
}