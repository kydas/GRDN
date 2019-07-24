import {GetGarden} from "../Gardens/GardenDAO";
import {waterNotification, tempNotification} from "../notifications/NotificationsDAO";

export function checkPlantNotification(gardenId, userId){
    const garden = GetGarden(gardenId);
    const weathers = garden.weather.filter(x => x != null);
    const plants = garden.plants.filter(x => x != null);
    //console.log("Line 8 plantDao: " + JSON.stringify(plants, null, 2));
    const yesterdayWeather = weathers[weathers.length - 1];
    //console.log(JSON.stringify(yesterdayWeather));
    const yesterdayPrecip = dailyPrecip(yesterdayWeather);
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
        //console.log("Line 22 PlantDAO: " + JSON.stringify(plant.cachedData.main_species.growth));
        const precipMin = getPrecipReq(plant);
        const tempMin = getTempMin(plant);
        console.log("precipMin 25 " + precipMin + "\n yesterdayPrecip 25 " + yesterdayPrecip);
        if (precipMin > yesterdayPrecip){
            if (precipMin > forecast){
                //console.log("Send plant water notification");
                waterNotification(userId, gardenId, plant._id)
                    .then(function(response){
                        console.log(response)
                    })
                    .catch(function(error){
                        console.log(error)
                    })
            }
        } else {
            console.log("plants have had enough water")
        }
        if (yesterdayWeather.minTemp > tempMin){
           // console.log("Send plant temperature notification");
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