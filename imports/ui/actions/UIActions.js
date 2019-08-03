import {modalSummoned, modalDismissed, messageCleared} from "./index.js";

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

export function clearMessage(msgId) {
  return dispatch => {
    dispatch(messageCleared(msgId));
  }
}
