import {
  VIEW_MORE
} from '../constants/types';

export function setAmountData(countPhoto, residue) {
  return {
    type: VIEW_MORE,
    countPhoto,
    residue
  };
}
