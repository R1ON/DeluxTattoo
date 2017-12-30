const initialState = {
  isOpen: false
};

export default function RegistrationReducer(state = initialState, action) {
  switch (action.type) {
    case 'REGISTRATION_MODAL':
      return { ...state, isOpen: action.isOpen };

    default:
      return state;
  }
};