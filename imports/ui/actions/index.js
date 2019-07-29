export function fetchGardensBegin(payload) {
  return {type: "FETCH_GARDENS_BEGIN", payload}
}

export function fetchGardensSuccess(payload) {
  return {type: "FETCH_GARDENS_SUCCESS", payload}
}

export function fetchGardensError(payload) {
  return {type: "FETCH_GARDENS_ERROR", payload}
}

export function addGardenSuccess(payload) {
  return {type: "ADD_GARDEN_SUCCESS", payload}
}

export function fetchGardenBegin(payload) {
  return {type: "FETCH_GARDEN_BEGIN", payload}
}

export function fetchGardenSuccess(payload) {
  return {type: "FETCH_GARDEN_SUCCESS", payload}
}

export function fetchGardenError(payload) {
  return {type: "FETCH_GARDEN_ERROR", payload}
}

export function deleteGardenSuccess(payload) {
  return {type: "DELETE_GARDEN_SUCCESS", payload}
}

export function deleteGardenError(payload) {
  return {type: "DELETE_GARDEN_ERROR", payload}
}

export function addPlantToGardenSuccess(payload) {
  return {type: "ADD_PLANT_TO_GARDEN_SUCCESS", payload}
}

export function addPlantToGardenError(payload) {
  return {type: "ADD_PLANT_TO_GARDEN_ERROR", payload}
}

export function removePlantFromGardenSuccess(payload) {
  return {type: "REMOVE_PLANT_FROM_GARDEN_SUCCESS", payload}
}

export function removePlantFromGardenError(payload) {
  return {type: "REMOVE_PLANT_FROM_GARDEN_ERROR", payload};
}

export function addNoteToPlantError(payload) {
  return {type: "ADD_NOTE_TO_PLANT_ERROR", payload};
}

export function addNoteToPlantSuccess(payload) {
  return {type: "ADD_NOTE_TO_PLANT_SUCCESS", payload};
}

export function selectGardenBegin(payload) {
  return {type: "SELECT_GARDEN_BEGIN", payload}
}

export function selectGardenSuccess(payload) {
  return {type: "SELECT_GARDEN_SUCCESS", payload}
}

export function selectPlantBegin(payload) {
  return {type: "SELECT_PLANT_BEGIN", payload}
}

export function selectPlantSuccess(payload) {
  return {type: "SELECT_PLANT_SUCCESS", payload}
}

export function selectPlantError(payload) {
  return {type: "SELECT_PLANT_ERROR", payload}
}

export function selectTrefleIdSuccess(payload) {
  return {type: "SELECT_TREFLE_ID_SUCCESS", payload}
}

export function selectTrefleIdError(payload) {
  return {type: "SELECT_TREFLE_ID_ERROR", payload}
}

export function modalSummoned(payload) {
  return {type: "SUMMON_MODAL", payload}
}

export function modalDismissed(payload) {
  return {type: "DISMISS_MODAL", payload}
}

export function messageCleared(payload) {
  return {type: "MESSAGE_CLEARED", payload}
}

export function getNotificationsSuccess(payload) {
  return {type: "GET_NOTIFICATIONS_SUCCESS", payload}
}

export function getNotificationsError(payload) {
  return {type: "GET_NOTIFICATIONS_ERROR", payload}
}

export function getNotificationsCount(payload) {
  return {type: "GET_NOTIFICATIONS_COUNT", payload}
}
