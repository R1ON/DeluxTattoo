import {
  VIEW_MORE
} from '../constants/types';

const initialState = {
  countPhoto: 0,
  residue: 0
};

export function viewMoreReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_MORE:
      return {
        ...state,
        countPhoto: action.countPhoto,
        residue: action.residue
      };

    default:
      return state;
  }
}
