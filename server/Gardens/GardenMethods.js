import { Meteor } from "meteor/meteor";
import {GetGardens, CreateGarden, GetGarden, AddPlant} from './GardenDAO';

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
    }
})
