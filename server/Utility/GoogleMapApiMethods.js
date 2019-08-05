import {MAP_API_KEY as local_key} from "../constants";

let MAP_API_KEY;
if (process.env._ && process.env._.indexOf("heroku")) {
  MAP_API_KEY = process.env.MAP_API_KEY;
} else {
  MAP_API_KEY = local_key;
}

Meteor.methods(
  {
      'googleMap.getApiKey'() {
        return MAP_API_KEY;
      }
  }
)
