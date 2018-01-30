import {
  IS_OPEN_MODAL
} from '../Constants';

const initialState = {
  isOpenRegistration: false,
  isOpenSignIn: false,
	status: ''
};

export function isOpenModalReducer(state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_MODAL:
      return {
        ...state,
        isOpenRegistration: action.isOpenRegistration,
        isOpenSignIn: action.isOpenSignIn
      };

	  case 'ZAEBIS':
	  	return {
			  ...state,
			  status: action.status
		  }

    default:
      return state;
  }
}
