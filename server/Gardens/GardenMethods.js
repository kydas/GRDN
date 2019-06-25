import { Meteor } from "meteor/meteor";
import {GetGardens, CreateGarden} from './Gardens';

Meteor.methods(
  {
    'garden.getGardens'({userId}){
      return GetGardens(userId);
    },
    'garden.createGarden'({userId}, {gardenName}){
      console.log(userId + gardenName);
      CreateGarden(userId, gardenName);
    }
})
