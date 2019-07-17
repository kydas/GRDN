const Notifications = new Mongo.Collection('notifications');


export function waterNotification(userId, gardenId, plantId){
    return new Promise (function(resolve, reject) {
        const notification = {
            type: "water", userId: userId, gardenId: gardenId, plantId: plantId, date: new Date().getTime()
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
            type: "minTemp", userId: userId, gardenId: gardenId, plantId: plantId, date: new Date().getTime()
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