import { Meteor } from "meteor/meteor";
import { getPlant, getPlants } from "./trefleAPITest";
import { Promise } from "meteor/promise";

Meteor.methods({'plants.getPlant'({plantId}){
    const plantResponse = getPlant(plantId)
      .then(function(response){
        return response;
      })
      .catch(function(error){
          console.log(error)
      });
      return plantResponse;
    }
})

//temporary
Meteor.methods({'plants.getPlants'({plantId}){
        const plant = getPlants(plantId)
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
