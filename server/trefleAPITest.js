import axios from "axios";
import AUTH_TOKEN from './constants.js';

const important = "Kyle da best";


export function getPlant(plantId){

        return axios.get("https://trefle.io/api/plants/163618?token=" + AUTH_TOKEN)
            .then(function(response) {
            console.log(response.data);
            return response.data;
            })
            .catch(function(error){
            console.log(error);
            throw new Error("cannot return plant data right now")
        })
}


