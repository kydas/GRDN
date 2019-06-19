import axios from "axios";
import AUTH_TOKEN from './constants.js';




export function getPlant(plantId){

        //return axios.get("https://trefle.io/api/plants/163618?token=" + AUTH_TOKEN)
        return axios.get("https://trefle.io/api/plants/" + plantId + "?token=" + AUTH_TOKEN)
            .then(function(response) {
            return response.data;
            })
            .catch(function(error){
            console.log(error);
            throw new Error("cannot return plant data right now")
        })
}

//TEMPORARY to test array returns
export function getPlants(plantId){

        return axios.get("https://trefle.io/api/plants/163618?token=" + AUTH_TOKEN)
            .then(function(response) {
            responseArray = [];
            responseArray.push(response.data);
            return responseArray;
            })
            .catch(function(error){
            console.log(error);
            throw new Error("cannot return plant data right now")
        })
}
