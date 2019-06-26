import {
  fetchGardensBegin, fetchGardensError, fetchGardensSuccess, addGardenSuccess
} from './index';

/*export function fetchUserGardens({userId}) {
  fetchGardensBegin();
  Meteor.call('garden.getUserGardens', {userId: Meteor.userId()}, (err, res) => {
    if (err) {
      fetchGardensError(err.statusText);
      return "Error";
    }
    return fetchGardensSuccess(res);

  });
}*/

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
