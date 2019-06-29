import { Meteor } from "meteor/meteor";
import {GetGardens, CreateGarden, GetGarden} from './GardenDAO';

Meteor.methods(
  {
    'garden.getUserGardens'({userId}){
      return GetGardens(userId);
    },
    'garden.createGarden'({userId}, {gardenName}){
      let garden = CreateGarden(userId, gardenName);
      return garden;
    },
    'garden.getGardenById'({gardenId}){
      return GetGarden(gardenId);
    }
})
