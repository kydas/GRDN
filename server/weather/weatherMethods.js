import { getWeatherTest, getWeatherDay, getForecast } from "./weatherAPI";
import {Meteor} from "meteor/meteor";

Meteor.methods(
    {
        'weather.test'(){
            const weather = getWeatherTest()
                .then(function(response){
                    return response;
                })
                .catch(function(error){
                    console.log(error);
                });
            return weather;

        },
        'weather.getDay'({time, location}){
            const weather = getWeatherDay(time, location)
                .then(function (response) {
                    return response;
                })
                .catch(function(error){
                    console.log(error)
                });
            return weather;
        },
        'weather.forecast'({location}){
            const forecast = getForecast(location)
                .then(function(response){
                    return response;
                })
                .catch(function(error){
                    console.log(error);
                });
            return forecast;
        }
    }
);