const Gardens = new Mongo.Collection('gardens');
import {getPlant} from '../trefleAPI';

export function GetGardens(userId) {
   return Gardens.find({userId: userId}).map(function (doc) {
    return doc;
  });

}

export function CreateGarden(userId, gardenName) {
  return new Promise(function(resolve, reject) {
    let garden = {name: gardenName, userId: userId, plants: []};
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
  console.log("id" + gardenId);
  let garden = GetGarden(gardenId);
  console.log("garden " + garden);
  let plants = garden.plants;
  let id = new Meteor.Collection.ObjectID();



  data = getPlant(plantId)
  .then((res) => {
    plants.push({
      _id: id._str,
      trefleId: plantId,
      qty: qty,
      cachedData: res,
      cachedDataLastUpdate: new Date().getTime()
    });

    garden.plants = plants;

    Gardens.update({_id: gardenId}, garden)
    return garden;
  })
}
