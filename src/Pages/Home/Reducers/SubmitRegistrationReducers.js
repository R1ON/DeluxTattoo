import {
  SUBMIT_REGISTRATION
} from '../Constants';

const initialState = {
  registrationStatus: false
};

export function submitRegistrationReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_REGISTRATION:
      return {
        ...state,
        registrationStatus: !state.registrationStatus
      };

    default:
      return state;
  }
}
