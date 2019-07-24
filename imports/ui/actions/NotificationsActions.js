import {getNotificationsSuccess, getNotificationsError} from './index.js';

export function getNotificationsByUserId(userId) {
  return dispatch => {
    Meteor.call("notification.getNotificationsByUserId", {userId}, (err, res) => {
      if (err) {
        dispatch(getNotificationsError());
      }
      console.log(res);
      dispatch(getNotificationsSuccess(res));
    });
  }
}
