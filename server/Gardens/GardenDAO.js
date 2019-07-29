export const Gardens = new Mongo.Collection('gardens');
import {getPlantByID} from '../trefleAPI';

export function GetGardens(userId) {
   return Gardens.find({userId: userId}).map(function (doc) {
    return doc;
  });

}

export function CreateGarden(userId, gardenName, location) {
  return new Promise(function(resolve, reject) {
    let garden = {name: gardenName, userId: userId, location: location, plants: [], weather: []};
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

  let data = getPlantByID(trefleId)
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
  let garden = GetGarden(gardenId);
  let plantIndex = garden.plants.findIndex(x => x._id == plantInstanceId);
  let id = new Meteor.Collection.ObjectID();


  if (!garden.plants[plantIndex].notes) {
      garden.plants[plantIndex].notes = [];
  }

  garden.plants[plantIndex].notes.push({
    _id: id,
    time,
    message
  })
  Gardens.update({_id: gardenId}, garden)
  return garden;
}



export function UpdateWeatherInGarden(gardenId, time){
  const garden = GetGarden(gardenId);
  const weathers = garden.weather.filter(x => x != null);
  const location = garden.location;
  let lastDay;
  if (weathers.length > 0) {
      lastDay = weathers[weathers.length - 1];
      if (!lastDay.time == time) {
          const weather = Meteor.call('weather.getDay', {time, location}, (err, res) => {
              if (err) {
                  console.log(err)
              }
              let wth = res;
              weathers.push(wth);
              garden.weather = weathers;
              Gardens.update({_id: gardenId}, garden);
          });
      }
  }else {
          const weather = Meteor.call('weather.getDay', {time, location}, (err, res) => {
              if (err){
                  console.log(err)
              }
              let wth = res;
              weathers.push(wth);
              garden.weather = weathers;
              Gardens.update({_id: gardenId}, garden);
          });
      }
    while (weathers.length > 7){
        weathers.shift();
    }
}
