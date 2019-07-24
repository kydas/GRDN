import {Meteor} from 'meteor/meteor';
import {getNotificationsByUserId} from "./NotificationsDAO";

Meteor.methods(
  {
    "notification.getNotificationsByUserId"({userId}){
      return getNotificationsByUserId(userId);
    }
  }
)
