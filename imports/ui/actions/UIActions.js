import {modalSummoned, modalDismissed} from "./index.js";

export function dismissModal() {
  return dispatch => {
    dispatch(modalDismissed(null));
  }
}

export function summonModalById(modalId) {
  return dispatch => {
    dispatch(modalSummoned(modalId));
  }
}
