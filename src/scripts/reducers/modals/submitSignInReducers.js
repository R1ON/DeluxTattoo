import {
  SUCCESS_SUBMIT_SIGN_IN,
  ERROR_SUBMIT_SIGN_IN
} from '../../constants/types';

const initialState = {
  successSignIn: false,
  errorSignIn: ''
};

export function submitSignInReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_SUBMIT_SIGN_IN:
      return {
        ...state,
        successSignIn: true
      };

    case ERROR_SUBMIT_SIGN_IN:
      return {
        ...state,
        errorSignIn: action.error
      };

    default:
      return state;
  }
}
