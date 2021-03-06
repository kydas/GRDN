import {getNotificationsSuccess, getNotificationsError, deleteNotificationSuccess, deleteNotificationError, clearCurrentNotifications} from './index.js';

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

export function clearCurrentUserNotifications(){
  return dispatch => {
    return dispatch(clearCurrentNotifications(null));
  }
}

export function deleteNotification(id) {
  return dispatch => {
    Meteor.call('notification.deleteNotification', {_id: id}, (err, res) => {
      if(err) {
        dispatch(deleteNotificationError(err.statusText));
        return "error";
      }
      return dispatch(deleteNotificationSuccess(id));
    });
  }
}
