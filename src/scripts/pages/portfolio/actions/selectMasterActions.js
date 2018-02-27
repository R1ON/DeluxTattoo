import {
  SELECT_MASTER
} from '../constants/types';

export function selectMasterAction(master) {
  return {
    type: SELECT_MASTER,
    master
  };
}
