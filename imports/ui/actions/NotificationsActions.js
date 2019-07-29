import {getNotificationsSuccess, getNotificationsError} from './index.js';

export function getCurrentUserNotifications() {
  return dispatch => {
    Meteor.call('notification.getNotificationsByUserId', {userId: Meteor.userId()}, (err, res) => {
      if (err) {
        dispatch(getNotificationsError(err.statusText));
        return "Error";
      }
      return dispatch(getNotificationsSuccess(res));

    });
  }
}

export function getCurrentUserNotificationsCount() {
  return dispatch => {
    Meteor.call('notification.getNotificationsCount', {userId: Meteor.userId()}, (err, res) => {
      if (err) {
        dispatch(getNotificationsError(err.statusText));
        return "Error";
      }
      return dispatch(getNotificationsSuccess(res));

    });
  }
}
