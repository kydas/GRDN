import {Meteor} from 'meteor/meteor';
import { AccountsCommon } from 'meteor/accounts-base'
import {updateWeatherInGarden, fetchUserGardens, plantNotifications} from "../ui/actions/GardenActions";

Accounts.onLogin(function(user) {

    Meteor.call("garden.getUserGardens",{userId: Meteor.userId()}, (err,res) =>{
        if (!err) {
            const gardens = res;
            console.log(res);
            for (i = 0; i < gardens.length; i++){
                const garden = gardens[i];
                updateWeatherInGarden(garden._id);
                if (garden.plants.length > 0){
                    plantNotifications(garden._id, Meteor.userId());
                }

            }
        }

      }
    );

});
