import { Meteor } from "meteor/meteor";
import {GetGardens, CreateGarden} from './Gardens';

Meteor.methods(
  {
    'garden.getUserGardens'({userId}){
      return GetGardens(userId);
    },
    'garden.createGarden'({userId}, {gardenName}){
      console.log(userId + gardenName);
      CreateGarden(userId, gardenName);
    }
})
