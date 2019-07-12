import {
  fetchGardensBegin, fetchGardensError, fetchGardensSuccess, addGardenSuccess,
  addPlantToGardenSuccess, addPlantToGardenError,
  removePlantFromGardenSuccess, removePlantFromGardenError,
  deleteGardenSuccess, deleteGardenError,
  addNoteToPlantSuccess, addNoteToPlantError,
  selectGardenBegin, selectGardenSuccess,
  selectPlantBegin, selectPlantSuccess, selectPlantError
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

export function addPlantToGarden(gardenId, plantId, qty, plantDate) {
  return dispatch => {
    //dispatch addPlant begin
    Meteor.apply('garden.addPlant', [{gardenId: gardenId}, {plantId: plantId}, {qty: qty}, {plantDate: plantDate}], (err, res) => {
      if (err) {
        return dispatch(addPlantToGardenError(err));
      }
      return dispatch(addPlantToGardenSuccess(res));
    });
  }
}

export function removePlantFromGarden(gardenId, plantInstanceId) {
  return dispatch => {
    Meteor.apply('garden.removePlant',  [
      {gardenId: gardenId},
      {plantInstanceId: plantInstanceId}
    ], (err, res) => {
      if (err) {
        return dispatch(removePlantFromGardenError(err));
      }
      return dispatch(removePlantFromGardenSuccess(res));
    });
  }
}

export function addNoteToPlant(gardenId, plantInstanceId, message) {
  return dispatch => {
    let time = new Date();
    Meteor.apply('garden.addNoteToPlant', [
      {gardenId: gardenId},
      {plantInstanceId: plantInstanceId},
      {time: time},
      {message: message}
    ], (err, res) => {
      if (err) {
        return dispatch(addNoteToPlantError(err));
      }
      return dispatch(addNoteToPlantSuccess(res));
    })

  }
}

export function selectGarden(gardenId) {
  return dispatch => {
    dispatch(selectGardenBegin());
    Meteor.call('garden.getGardenById', {gardenId: gardenId}, (err, res) => {
      if (err) {
        dispatch(fetchGardenError(err.statusText));
        return "Error";
      }
      return dispatch(selectGardenSuccess(res));
    });
  }

}

export function selectPlant(gardenId, plantId) {
  return dispatch => {
    dispatch(selectPlantBegin(null));
    Meteor.call('garden.getGardenById', {gardenId: gardenId}, (err, res) => {
      if (err) {
        dispatch(fetchGardenError(err.statusText));
        return "Error";
      }

      let plant = res.plants.find(x => x._id == plantId);
      if (plant == null) {
        dispatch(selectPlantError("Plant not found!"));
      }
      return dispatch(selectPlantSuccess(plant));
    });
  }
}
