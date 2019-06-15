import { Meteor } from "meteor/meteor";
import { getPlant } from "./trefleAPITest";

Meteor.methods({'plants.getPlant'({plantId}){
        const plant = Promise.await(getPlant(plantId));

            return plant;
}
  
})