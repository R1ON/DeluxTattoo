import {
  IS_OPEN_REGISTRATION_MODAL,
  IS_OPEN_SING_IN_MODAL
} from '../Constants';

const initialState = {
  isOpenRegistration: false,
  isOpenSingIn: false
};

export function isOpenRegistrationModalReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_REGISTRATION_MODAL:
      return { ...state, isOpenRegistration: action.isOpenRegistration };

    default:
      return state;
  }
}

export function isOpenSingInModalReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_SING_IN_MODAL:
      return { ...state, isOpenSingIn: action.isOpenSingIn };

    default:
      return state;
  }
}