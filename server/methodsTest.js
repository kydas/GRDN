import { Meteor } from "meteor/meteor";
import {getPlant} from "./trefleAPITest";

Meteor.methods({'plants.getPlant'({plantId}){
    getPlant(plantId).then(function(response){
        console.log(response)
        return response;
    });
}

})