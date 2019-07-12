const Gardens = new Mongo.Collection('gardens');
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
      console.log(garden);
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

  let data = getPlantByID(plantId)    //??????
  .then((res) => {
    console.log(res);
    plants.push({
      _id: id._str,
      trefleId: plantId,
      qty: qty,
      cachedData: res,
      cachedDataLastUpdate: new Date().getTime()
    });

    garden.plants = plants;
    console.log(garden);

    Gardens.update({_id: gardenId}, garden)
    return garden;
  })
}


export function UpdateWeatherInGarden(gardenId, time){
  const garden = GetGarden(gardenId);
  const weathers = garden.weather;
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
