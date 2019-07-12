import { Meteor } from "meteor/meteor";
import {GetGardens, CreateGarden, GetGarden, AddPlant, UpdateWeatherInGarden} from './GardenDAO';

Meteor.methods(
  {
    'garden.getUserGardens'({userId}){
      return GetGardens(userId);
    },
    'garden.createGarden'({userId}, {gardenName}, {location}){
      let garden = CreateGarden(userId, gardenName, location);
      return garden;
    },
    'garden.getGardenById'({gardenId}){
      return GetGarden(gardenId);
    },
    'garden.addPlant'({gardenId}, {plantId}, {qty}) {
      return AddPlant(gardenId, plantId, qty);
    },

    'garden.updateWeather'({gardenId, time}){
        console.log("Garden methods:" + gardenId + " " + time );
        return UpdateWeatherInGarden(gardenId, time)

    }
});
