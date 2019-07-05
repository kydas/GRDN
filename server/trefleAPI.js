import axios from "axios";
import AUTH_TOKEN from './constants.js';


export function getPlant(searchParams){
    let reqURL = "https://trefle.io/api/plants?token=" + AUTH_TOKEN + "&&complete_data=true";
    if(searchParams.common_name != ""){
        reqURL += "&&q=" + searchParams.common_name;
    }
    if (searchParams.ph_min != ""){
        reqURL += "&&ph_minimum=" + searchParams.ph_min;
    }
    if (searchParams.duration != ""){
        reqURL += "&&duration=" + searchParams.duration;
    }
    if (searchParams.drought_tol != ""){
        reqURL += "&&drought_tolerance=" + searchParams.duration;
    }
    return axios.get(reqURL)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error){
        console.log(error);
        throw new Error("cannot return plant data right now")
      })
}

export function getPlantById(plantId){
    let reqURL = "https://trefle.io/api/plants/" + plantId + "/?token=" + AUTH_TOKEN + "&&complete_data=true";
    return axios.get(reqURL)
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
/*

            .then(function(response) {
            const responseArray = [];
            responseArray.push(response.data);
            return responseArray;
            })
            .catch(function(error){
            console.log(error);
            throw new Error("cannot return plant data right now")
        })*/
}

export function getPlantsCommon(name){
    return axios.get("https://trefle.io/api/plants?token=" + AUTH_TOKEN + "&&q=" + name + "&&complete_data=true")
        .then(function(response) {

            return response.data;
        })
        .catch(function(error){
            console.log(error);
            throw new Error("cannot return plant data right now")
        })
}
