const Notifications = new Mongo.Collection('notifications');
import {GetGarden} from '../Gardens/GardenDAO';

export function waterNotification(userId, gardenId, plantId){
    return new Promise (function(resolve, reject) {
        const notification = {
            type: "water", userId: userId, gardenId: gardenId, plantId: plantId, date: new Date().getTime(),
            read: false
        };
        Notifications.insert(notification, function(err, res) {
            if (err) {
                reject(err);
            }
            notification._id = res;
            resolve(notification);
        })
    })
}

export function tempNotification(userId, gardenId, plantId){
    return new Promise (function(resolve, reject) {
        const notification = {
            type: "minTemp", userId: userId, gardenId: gardenId, plantId: plantId, date: new Date().getTime(),
            read: false
        };
        Notifications.insert(notification, function(err, res) {
            if (err) {
                reject(err);
            }
            notification._id = res;
            resolve(notification);
        })
    })
}

export function indoorNotification(userId, gardenId, plantId){
    return new Promise(function(resolve, reject){
        const notification = {
            type: "indoorWater", userId: userId, gardenId: gardenId, plantId: plantId, date: new Date().getTime(),
            read: false
        };
        Notifications.insert(notification, function(err, res) {
            if (err) {
                reject(err);
            }
            notification._id = res;
            resolve(notification);
        })
    })
}

export function getNotificationsByUserAndGarden(userId, gardenId){
    return Notifications.find({userId:userId, gardenId: gardenId}).map(function(doc) {
        return doc;
    });
}
export function getNotificationsByUserId(userId) {
  return Notifications.find({userId: userId}).map(function (doc) {
    if (doc.gardenId != null) {
      doc.garden = GetGarden(doc.gardenId);
      if (doc.plantId != null) {
        doc.plant = doc.garden.plants.find(x => x._id == doc.plantId);
      }
    }

    return doc;
  });
}

export function getNotificationCountByUserId(userId){
  return Notifications.find({userId: userId}).count;
}

export function deleteNotification(_id) {
  return Notifications.remove({_id: _id}, (err) => {
    if (err) {
      console.log(err)
    }
    return _id;
  });
}

