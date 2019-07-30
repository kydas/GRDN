import {Meteor} from 'meteor/meteor';
import {getNotificationsByUserId, getNotificationsCountByUserId, deleteNotification} from "./NotificationsDAO";

Meteor.methods(
  {
    "notification.getNotificationsByUserId"({userId}){
      return getNotificationsByUserId(userId);
    },
    "notification.getNotificationsCountByUserId"({userId}){
      return getNotificationsCountByUserId(userId);
    },
    'notification.deleteNotification'({_id}) {
      return deleteNotification(_id);
    }
  }
)
