const Gardens = new Mongo.Collection('gardens');

export function GetGardens(userId) {
   return Gardens.find({userId: userId}).map(function (doc) {
    return doc;
  });

}

export function CreateGarden(userId, gardenName) {
  return new Promise(function(resolve, reject) {
    let garden = {name: gardenName, userId: userId};
    Gardens.insert(garden, function (err, res) {
      if (err) {
        reject(err);
      }
      garden._id = res;
      resolve(garden);
    });
  })



}
