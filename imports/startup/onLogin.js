import {Meteor} from 'meteor/meteor';
import { AccountsCommon } from 'meteor/accounts-base'
import {updateWeatherInGarden, fetchUserGardens} from "../ui/actions/GardenActions";

Accounts.onLogin(function(user) {

    const gardens = Meteor.call("garden.getUserGardens",{userId: Meteor.userId()}, (err,res) =>{
        const gardens1 = res
        for (i = 0; i < gardens1.length; i++){
            updateWeatherInGarden(gardens1[i]._id)
        }
      }
    );

});
