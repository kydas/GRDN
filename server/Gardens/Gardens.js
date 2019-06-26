const Gardens = new Mongo.Collection('gardens');

export function GetGardens(userId) {
   return Gardens.find({userId: userId}).map(function (doc) {
    return doc;
  });

}

export function CreateGarden(userId, gardenName) {
  Gardens.insert({name: gardenName, userId: userId});
}
