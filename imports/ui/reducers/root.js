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
      console.log(action.payload);
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
      console.log(action.payload);
      return Object.assign({}, state, {
          gardens: state.gardens.concat(action.payload)
      })

    default:
      return state;
  }
}
