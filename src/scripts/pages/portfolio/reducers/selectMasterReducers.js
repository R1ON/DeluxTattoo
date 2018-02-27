import {
  SELECT_MASTER
} from '../constants/types';

const initialState = {
  master: 0
};

export function selectMasterReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_MASTER:
      return {
        ...state,
        master: action.master
      };

    default:
      return state;
  }
}
