import {
  fetchGardensBegin, fetchGardensError, fetchGardensSuccess, addGardenSuccess,
  addPlantToGardenSuccess, addPlantToGardenError
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

  export function createGarden(userId, gardenName) {
    return dispatch => {
      Meteor.apply('garden.createGarden', [{userId: Meteor.userId()}, {gardenName: gardenName}], {wait: true}, function(err, res) {
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
