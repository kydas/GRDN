let MAP_API_KEY;
Meteor.methods(
  {
      'googleMap.getApiKey'() {
        if (process.env._ && process.env._.indexOf("heroku")) {
          return process.env.MAP_API_KEY;
        } else {
          import {MAP_API_KEY} from '../constants.js';
          return MAP_API_KEY;
        }
      }
  }
)
