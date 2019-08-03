import { Meteor } from "meteor/meteor";
import {GetGardens, CreateGarden, GetGarden, DeleteGarden, AddPlant, RemovePlant, AddNote, UpdateWeatherInGarden} from './GardenDAO';
import {checkPlantNotification, WaterPlant} from "../Plants/PlantDAO";

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
    'garden.deleteGarden'({gardenId}) {
      return DeleteGarden(gardenId);
    },
    'garden.addPlant'({gardenId}, {plantId}, {qty}, {plantDate}) {
      return AddPlant(gardenId, plantId, qty, plantDate);
    },
    'garden.removePlant'({gardenId}, {plantInstanceId}) {
      return RemovePlant(gardenId, plantInstanceId);
    },
    'garden.addNoteToPlant'({gardenId}, {plantInstanceId}, {time}, {message}){
      return AddNote(gardenId, plantInstanceId, time, message);
    },
    'garden.updateWeather'({gardenId, time}){
        return UpdateWeatherInGarden(gardenId, time)
    },
    'plant.checkNotifications'({gardenId, userId}){
        return checkPlantNotification(gardenId, userId);
    },
    'plant.waterPlant'({gardenId, plantId}) {
      return WaterPlant(gardenId, plantId);
    }
});
