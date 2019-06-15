import axios from "axios";
import AUTH_TOKEN from './constants.js';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.baseURL = 'https://trefle.io/api'

//simple get request
//always returns same plant for now
// function getPlant(plantId){

//     return axios.get("https://trefle.io/api/plants/163618?token=" + AUTH_TOKEN);
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
// }

// export async function getPlant(plantId) {
//     try {
//         const result = await axios.get("https://trefle.io/api/plants/163618?token=" + AUTH_TOKEN);
//         return result;
//     } catch (error) {
//         return "could not find plant" + error;
//     } finally {
//         //
//     }
// }

function getPlant(plantId){
    router.get('/', function(req, res, next){
        axios.get("https://trefle.io/api/plants/163618?token=" + AUTH_TOKEN)
        .then(function(response) {
            res.send(response.data)
        })
        .catch(function(){
            throw new Error("cannot return plant data right now")
        })
    })
}




export default getPlant; 