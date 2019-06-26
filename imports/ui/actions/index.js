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
