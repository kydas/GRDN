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
};