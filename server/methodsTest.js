import { Meteor } from "meteor/meteor";
import { getPlant } from "./trefleAPITest";
import { Promise } from "meteor/promise";

Meteor.methods({'plants.getPlant'({plantId}){
        const plant = getPlant(plantId)
            .then(function(response){
                console.log(response)
            return response;
        })
            .catch(function(error){
                console.log(error)
            });

            return plant;
}
  
})