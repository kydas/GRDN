import axios from "axios";
import AUTH_TOKEN from './constants.js';


axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.baseURL = "https://trefle.io/api/plants/";


export function getPlant(param){

        return axios.get("?" + "&&q="+ param)

            .then(function(response) {
            console.log(response.data);
            return response.data;
            })
            .catch(function(error){
            console.log(error);
            throw new Error("cannot return plant data right now")
        })
}


