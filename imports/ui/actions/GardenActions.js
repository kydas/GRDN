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

export function updateWeatherInGarden(gardenId){

  let time = new Date;
  let yesterday = time.getDate() - 1;
  time.setDate(yesterday);
  time = Math.floor((time.getTime() / 1000));
  console.log("Garden Actions, time:" + time + " id:" + gardenId);
  Meteor.call('garden.updateWeather', {gardenId, time}, (err, res) => {
    if (err){
      return // need to add failure success function TODO
    } else
      return // ditto above TODO
  });
}
