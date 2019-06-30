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

export function GetGarden(gardenId) {
  let garden =  Gardens.findOne({_id: gardenId}, { limit: 1 }, (err, res) =>{
    if (err) {
      console.log(err);
    }
  });
  return garden;
}

export function AddPlant(gardenId, plantId, qty) {
  let garden = GetGarden(gardenId);
  let plants = garden.plants;
  if (typeof plants === "undefined") {
    plants = [];
  }

  plants.push({
    trefleId: plantId,
    qty: qty
  });

  garden.plants = plants;

  Gardens.update({_id: gardenId}, {plants: plants})
  return garden;
}
