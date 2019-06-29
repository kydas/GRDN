import {
  fetchGardensBegin, fetchGardensError, fetchGardensSuccess, addGardenSuccess
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
