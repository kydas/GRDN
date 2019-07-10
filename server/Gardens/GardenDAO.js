const Gardens = new Mongo.Collection('gardens');
import {getPlantByID} from '../trefleAPI';

export function GetGardens(userId) {
   return Gardens.find({userId: userId}).map(function (doc) {
    return doc;
  });

}

export function CreateGarden(userId, gardenName, location) {
  return new Promise(function(resolve, reject) {
    let garden = {name: gardenName, userId: userId, location: location, plants: []};
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

export function DeleteGarden(gardenId) {
  Gardens.remove({_id: gardenId}, (err) => {
    if (err) {
      console.log(err);
    }
    return gardenId;
  });
}


export function AddPlant(gardenId, trefleId, qty, plantDate) {
  let garden = GetGarden(gardenId);
  let plants = garden.plants;
  let id = new Meteor.Collection.ObjectID();

  data = getPlantByID(trefleId)
  .then((res) => {
    plants.push({
      _id: id._str,
      trefleId: trefleId,
      qty: qty,
      plantDate: plantDate,
      cachedData: res,
      cachedDataLastUpdate: new Date().getTime(),
      notes: []
    });

    garden.plants = plants;
    Gardens.update({_id: gardenId}, garden)
    return garden;
  })
}

export function RemovePlant(gardenId, plantInstanceId) {
  let garden = GetGarden(gardenId);
  let plants = garden.plants;
  plants = plants.filter(el => el._id != plantInstanceId);
  garden.plants = plants;
  Gardens.update({_id: gardenId}, garden)
  return garden;
}

export function AddNote(gardenId, plantInstanceId, time, message) {
  console.log(plantInstanceId);
  let garden = GetGarden(gardenId);
  console.log(JSON.stringify(garden.plants));
  let plantIndex = garden.plants.findIndex(x => x._id == plantInstanceId);
  console.log(plantIndex);

  if (!garden.plants[plantIndex].notes) {
      garden.plants[plantIndex].notes = [];
  }

  garden.plants[plantIndex].notes.push({
    time,
    message
  })
  Gardens.update({_id: gardenId}, garden)
  return garden;
}
