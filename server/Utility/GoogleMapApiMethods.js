import {MAP_API_KEY} from '../constants.js';

Meteor.methods(
  {
      'googleMap.getApiKey'() {
        return MAP_API_KEY;
      }
  }
)
