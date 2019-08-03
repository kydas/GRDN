const baseState = {
  gardens: null,
  loading: false,
  error: null,
  currentGarden: null,
  currentPlant: null,
  currentModal: null,
  addToGardenError: null,
  addToGardenSuccess: null,
  userNotifications: [],
  userNotificationsCount: 0,
  recentlyWatered: []
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

    case "DELETE_GARDEN_SUCCESS":
      return Object.assign({}, state, {
        gardens: state.gardens.filter(x => x._id != action.payload)
      })

    case "ADD_PLANT_TO_GARDEN_SUCCESS":
      return Object.assign({}, state, {
          addToGardenSuccess: true,
      })

    case "ADD_PLANT_TO_GARDEN_ERROR":
      return Object.assign({}, state, {
          addToGardenError: action.payload,
      })

    case "SELECT_GARDEN_BEGIN":
      return Object.assign({}, state, {
        currentGarden: null
      })

    case "SELECT_GARDEN_SUCCESS":
      return Object.assign({}, state, {
        currentGarden: action.payload
      })

    case "SELECT_PLANT_BEGIN":
      return Object.assign({}, state, {
        currentPlant: null
    })

    case "SELECT_PLANT_SUCCESS":
      return Object.assign({}, state, {
        currentPlant: action.payload
      })

    case "SELECT_TREFLE_ID_SUCCESS":
      return Object.assign({}, state, {
        currentTrefleId: action.payload
      })




    //UI actions
    case "DISMISS_MODAL":
    return Object.assign({}, state, {
      currentModal: null
    })

    case "SUMMON_MODAL":
      return Object.assign({}, state, {
        currentModal: action.payload
      })

    case "MESSAGE_CLEARED":
      switch (action.payload) {
        case "addToGardenSuccess":
        return Object.assign({}, state, {
          addToGardenSuccess: null
        })

        case "addToGardenError":
        return Object.assign({}, state, {
          addToGardenError: null
        })

        default:
          return state;
      }

    case "GET_NOTIFICATIONS_SUCCESS":
      return Object.assign({}, state, {
        userNotifications: action.payload,
        userNotificationsCount: action.payload.length
      })


    case "DELETE_NOTIFICATION_SUCCESS":
      return Object.assign({}, state, {
        userNotifications: state.userNotifications.filter(x => x._id != action.payload)
      })

    case "WATER_PLANT_SUCCESS":
      let newWatered = [...state.recentlyWatered];
      newWatered.push(action.payload);
      return Object.assign({}, state, {
        recentlyWatered: newWatered
      })


    default:
      return state;
  }
}
