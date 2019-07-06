import {MAP_API_KEY} from '../constants.js';

Meteor.methods(
  {
      'googleMap.getApiKey'() {
        console.log(MAP_API_KEY);
        return MAP_API_KEY;
      }
  }
)
