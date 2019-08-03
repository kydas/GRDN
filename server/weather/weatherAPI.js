import {WEATHER_KEY} from "../constants";
import axios from "axios";


export function getWeatherTest() {
    return axios.get("https://api.darksky.net/forecast/" + WEATHER_KEY + "/43.653908,-79.384293,726624000?units=si")
        .then(function(response){
            return response.data;
        })
        .catch(function(error) {
            console.log(error);
            throw new Error("Cannot return weather data right now!")
        });
}

export function getWeatherDay(time, location){
    let locationReq = location.lat.toString();
    locationReq = locationReq + "," + location.lng.toString();
    const reqURL = "https://api.darksky.net/forecast/" + WEATHER_KEY + "/" + locationReq + "," + time + "?";
    return axios.get(reqURL, {
        params: {units: "si",
                exclude: "currently,hourly,flags"}
    })
        .then(function(response){
            const weather = response.data.daily.data[0];
            return {
                time: weather.time,
                icon: weather.icon,
                maxTemp: weather.temperatureMax,
                minTemp: weather.temperatureMin,
                precipitation: weather.precipIntensity

            };
        })
        .catch(function(error){
            console.log(error);
            throw new Error("Cannot return weather data right now")
        })
}

export function getForecast(location){
    let locationReq = location.lat.toString();
    locationReq = locationReq + "," + location.lng.toString();
    const reqURL = "https://api.darksky.net/forecast/" + WEATHER_KEY + "/" + locationReq + "?";
    return axios.get(reqURL, {
        params: {units: "si",
                exclude: "minutely,currently, hourly, flags"}
    })
        .then(function(response) {
            const forecast = response.data.daily.data[0];
            return {
                time: forecast.time,
                icon: forecast.icon,
                maxTemp: forecast.temperatureMax,
                minTemp: forecast.temperatureMin,
                precipitation: forecast.precipIntensity

            };
        })
        .catch(function (error) {
            console.log(error);
            throw new Error("cannot return forecast right now");
        })
}
