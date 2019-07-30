import {GetGarden} from "../Gardens/GardenDAO";
import {waterNotification, tempNotification, getNotifications} from "../notifications/NotificationsDAO";

export function checkPlantNotification(gardenId, userId){
    const garden = GetGarden(gardenId);
    const notifications = getNotifications(userId, gardenId);
    const weathers = garden.weather.filter(x => x != null);
    const plants = garden.plants.filter(x => x != null);
    const yesterdayWeather = weathers[weathers.length - 1];
    const yesterdayPrecip = dailyPrecip(yesterdayWeather);
    const today = new Date();
    let forecast = 0;
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
        if (precipMin > yesterdayPrecip){
            if (precipMin > forecast){
                waterNotification(userId, gardenId, plant._id)
                    .then(function(response){
                        console.log(response)
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                plant.watered.push(today);
            }
        } else {
            console.log("plants have had enough water")
        }
        if (yesterdayWeather.minTemp > tempMin){
            tempNotification(userId, gardenId, plant._id)
                .then(function(response) {
                    console.log(response)
                })
                .catch(function(error){
                    console.log(error)
                })
        }
    }
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
    if (date1.getFullYear() == date2.getFullYear()){
        if(date1.getMonth() == date2.getMonth()) {
            if (date1.getDate() == date2.getDate()){
                return true;
            }
        }
    } else {
        return false;
    }
}