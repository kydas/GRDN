import {Meteor} from 'meteor/meteor';
import {getNotificationsByUserId, getNotificationsCountByUserId} from "./NotificationsDAO";

Meteor.methods(
  {
    "notification.getNotificationsByUserId"({userId}){
      return getNotificationsByUserId(userId);
    },
    "notification.getNotificationsCountByUserId"({userId}){
      return getNotificationsCountByUserId(userId);
    }
  }
)
