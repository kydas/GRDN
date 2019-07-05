const baseState = {
  gardens: null,
  loading: false,
  error: null
};

export default function rootReducer (state = baseState, action) {

  switch (action.type) {

    case "FETCH_GARDENS_BEGIN":
      return Object.assign({}, state, {
        gardens: null,
        loading: true,
        error: null
      });

    case "FETCH_GARDENS_SUCCESS":
      return Object.assign({}, state, {
        gardens: action.payload,
        loading: false,
        error: null
      });

    case "FETCH_GARDENS_ERROR":
      return Object.assign({}, state, {
        gardens: [],
        loading: false,
        error: action.payload
      })

    case "ADD_GARDEN_SUCCESS":
      return Object.assign({}, state, {
          gardens: state.gardens.concat(action.payload),
      })

    case "ADD_PLANT_TO_GARDEN_SUCCESS":
      return Object.assign({}, state, {
          addToGardenSuccess: true,
      })

    case "ADD_PLANT_TO_GARDEN_ERROR":
      return Object.assign({}, state, {
          addToGardenError: action.payload,
      })

    default:
      return state;
  }
}