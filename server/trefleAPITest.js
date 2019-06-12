import axios from "axios";
import AUTH_TOKEN from './constants.js';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.baseURL = 'https://trefle.io/api'

//simple get request
//always returns same plant for now
export function getPlant(plantId){

    return axios.get("https://trefle.io/api/plants/163618?token=" + AUTH_TOKEN);
    // axios.get("https://trefle.io/api/plants/163618?token=" + AUTH_TOKEN)
    //     .then(function(response) {
    //         //console.log(response);
    //         return response;
    //     })
    //     .catch(function () {
    //         console.log(error);
    //         return "error"; 
    //     })
    //     .finally(function () {

    //     })
}




export default getPlant(); 