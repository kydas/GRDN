import {GetGarden, Gardens} from "../Gardens/GardenDAO";
import {waterNotification, tempNotification, getNotificationsByUserId, getNotificationsByUserAndGarden} from "../notifications/NotificationsDAO";

export function checkPlantNotification(gardenId, userId){
    const garden = GetGarden(gardenId);
    const notifications = getNotificationsByUserAndGarden(userId, gardenId);
    const weathers = garden.weather.filter(x => x != null);
    const plants = garden.plants.filter(x => x != null);
    const yesterdayWeather = weathers[weathers.length - 1];
    const yesterdayPrecip = dailyPrecip(yesterdayWeather);
    const today = new Date();
    let forecast = 0;
    let waterBool = waterNoteToday(notifications);
    let tempBool = tempNoteToday(notifications);
    if(!waterBool || !tempBool){
        Meteor.call('weather.forecast', {location: garden.location}, (res, err) => {
            if(!err){
                forecast = dailyPrecip(res);
            } else {
                console.log(err);
            }
        });
        for (i = 0; i < plants.length; i++){
            const plant = plants[i];
            const precipMin = getPrecipReq(plant);
            const tempMin = getTempMin(plant);
            if (!plant.watered){
                plant.watered = [];
            }
            const watered = plant.watered;
            const watLength = watered.length;
            if (!waterBool && precipMin > yesterdayPrecip){
                if (precipMin > forecast){
                    if (watLength == 0 || !withinDay(today, watered[watered.length])) {
                        waterNotification(userId, gardenId, plant._id)
                            .then(function (response) {
                                //All good
                            })
                            .catch(function (error) {
                                console.log(error)
                            })
                        watered.push(today);
                    }
                }
            } else {
                console.log("plants have had enough water")
            }
            if (!tempBool && yesterdayWeather.minTemp < tempMin){
                tempNotification(userId, gardenId, plant._id)
                    .then(function(response) {
                        //All good
                    })
                    .catch(function(error){
                        console.log(error)
                    })
            }
        }
        Gardens.update({_id: gardenId}, garden);
    }

}

export function watered(gardenId, plantInstanceId){
    const today = new Date();
    const garden = GetGarden(gardenId);
    const plants = garden.plants.filter(x => x != null);
    const index = garden.plants.findIndex(x => x._id == plantInstanceId);
    const plant = plants[index];
    if(!plant.watered){
        plant.watered = []
    }
    plant.watered.push(today);
    Gardens.update({_id: gardenId}, garden);
}


function getPrecipReq(plant) {
    const data = plant.cachedData.main_species.growth;
    const precipMin =  data.precipitation_minimum.cm * 10;
    const season = data.frost_free_days_minimum;
    return precipMin / season;
}

function dailyPrecip(weather){
    const precipIntensity = weather.precipitation;
    return precipIntensity * 24;
}



function getTempMin(plant){
    const data = plant.cachedData.main_species.growth;
    return data.temperature_minimum.deg_c;
}

function withinDay(date1, date2) {
    let date = new Date(date2);
    if (date1.getFullYear() == date.getFullYear()){
        if(date1.getMonth() == date.getMonth()) {
            if (date1.getDate() == date.getDate()){
                return true;
            }
        }
    } else {
        return false;
    }
}

function waterNoteToday(notifications){
    const today = new Date();
    notifications = notifications.filter( x => x.type == "water");
    const notLength = notifications.length;
    for (i = 0; i < notLength; i++){
        let date = notifications[i].date;
        if (withinDay(today, date)){
            return true;
        }
    }
    return false;
}

function tempNoteToday(notifications){
    const today = new Date();
    notifications = notifications.filter( x => x.type == "minTemp");
    const notLength = notifications.length;
    for (i = 0; i < notLength; i++){
        let date = notifications[i].date;
        if (withinDay(today, date)){
            return true;
        }
    }
    return false;
}