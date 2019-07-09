import {
  fetchGardensBegin, fetchGardensError, fetchGardensSuccess, addGardenSuccess,
  addPlantToGardenSuccess, addPlantToGardenError,
  removePlantFromGardenSuccess, removePlantFromGardenError,
  deleteGardenSuccess, deleteGardenError
} from './index';

export function fetchUserGardens() {
  return dispatch => {
    dispatch(fetchGardensBegin());
    Meteor.call('garden.getUserGardens', {userId: Meteor.userId()}, (err, res) => {
      if (err) {
        dispatch(fetchGardensError(err.statusText));
        return "Error";
      }
      return dispatch(fetchGardensSuccess(res));

    });
  }
}

  export function createGarden(userId, gardenName, location) {
    console.log(location);
    return dispatch => {
      Meteor.apply('garden.createGarden', [{userId: Meteor.userId()}, {gardenName: gardenName}, {location: location}], {wait: true}, function(err, res) {
        if (err) {
          console.log(err);
        }
        dispatch(addGardenSuccess(res))
      });
    }
  }

  export function fetchGardenById(gardenId) {
    return dispatch => {
      dispatch(fetchGardenBegin());
      Meteor.call('garden.getGardenById', {id: gardenId}, (err, res) => {
        if (err) {
          dispatch(fetchGardenError(err.statusText));
          return "Error";
        }
        return dispatch(fetchGardensSuccess(res));
      });
    }
  }

  export function deleteGardenById(gardenId) {
    return dispatch => {
      Meteor.call('garden.deleteGarden', {gardenId: gardenId}, (err, res) => {
        if (err) {
          dispatch(deleteGardenError(err.statusText));
          return "Error";
        }
        return dispatch(deleteGardenSuccess(gardenId));
      });
    }
  }

export function addPlantToGarden(gardenId, plantId, qty) {
  return dispatch => {
    //dispatch addPlant begin
    Meteor.apply('garden.addPlant', [{gardenId: gardenId}, {plantId: plantId}, {qty: qty}], (err, res) => {
      if (err) {
        return dispatch(addPlantToGardenError(err));
      }
      return dispatch(addPlantToGardenSuccess(res));
    });
  }
}

export function removePlantFromGarden(gardenId, plantInstanceId) {
  return dispatch => {
    Meteor.apply('garden.removePlant',  [{gardenId: gardenId}, {plantInstanceId: plantInstanceId}], (err, res) => {
      if (err) {
        return dispatch(removePlantFromGardenError(err));
      }
      return dispatch(removePlantFromGardenSuccess(res));
    });
  }
}
