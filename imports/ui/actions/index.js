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
