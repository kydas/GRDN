import Axios from "axios";

const AUTH_TOKEN = "Y2tvRjZmd1E0SXVRNlNDN3MrQzFhZz09"

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.baseURL = 'https://trefle.io/api'

//simple get request
axios.get("/plants/163618?")
    .then(function(response) {
        console.log(response);
})
.catch(function () {
    console.log(error);
})
.finally(function () {

})


//get request based on slides

router.get('/', function(req, res, next) {
    axios.get("/plants/163618")
        .then(function(response){
            res.send(response.data)
        })
        .catch(function (error){
            throw new Error('Cannot return plant right now')
        })
})