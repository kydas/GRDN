import { Meteor } from "meteor/meteor";


Meteor.call("plants.getPlant", {
    plantId: '12345'                   //this doesn't mean anything right now
});