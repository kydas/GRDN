const Gardens = new Mongo.Collection('gardens');

export function GetGardens(userId) {
  Gardens.find({userId: userId}, function(err, res) {
    if (err) {
      console.log(err);
    }
    console.log(res);
    return res;
  })
}

export function CreateGarden(userId, gardenName) {
  Gardens.insert({name: gardenName, userId: userId});
}
