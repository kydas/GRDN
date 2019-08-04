import axios from "axios";

let AUTH_TOKEN;

if (process.env._ && process.env._.indexOf("heroku")) {
  AUTH_TOKEN = process.env.AUTH_TOKEN;
} else {
  import {AUTH_TOKEN} from './constants.js';
}

const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false
});

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
        reqURL += "&&drought_tolerance=" + searchParams.drought_tol;
    }
    //console.log(reqURL);
    return axios.get(reqURL, {
        httpsAgent: agent
    })
      .then(function(response) {
        return response.data;
      })
      .catch(function(error){
        console.log(error);
        throw new Error("cannot return plant data right now")
      })
}

export function getPlantByID(plantId){


    return axios.get("https://trefle.io/api/plants/" + plantId + "?token=" + AUTH_TOKEN, {
        httpsAgent: agent
    } )

            .then(function(response) {
            return response.data;
            })
            .catch(function(error){
            console.log(error);
            throw new Error("cannot return plant data right now")
        })
}

export function getPlantsCommon(name){

    return axios.get("https://trefle.io/api/plants?token=" + AUTH_TOKEN + "&&q=" + name + "&&complete_data=true", {
        httpsAgent: agent
    })

        .then(function(response) {

            return response.data;
        })
        .catch(function(error){
            console.log(error);
            throw new Error("cannot return plant data right now")
        })
}
