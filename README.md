# CPSC 436 Project 
## What is GRDN?

  GRDN is an app for gardeners. Whether you are buying your first plant, or manage 10 gardens, GRDN aims to help you garden better. GRDN offers detailed plant information so that you can better understand your plants to help them grow and thrive. You can use GRDN's search functionality to find your plants and get information about them, or help decide on a new addition to your garden. GRDN also gives you helpful weather information specific to your location so that you know exactly which plants need water, and which might need some help to get through a particularly cold night. Even if you have a few potted plants in your apartment, GRDN can remind you to water them. 


Created by: Joshua Grant, Kyle de Silva, ~~Brett Pasula~~

## Team responsibilities:

Joshua Grant took the lead on the front end of the application. He took responsibility for design of the app, and the user interface. He also took the lead on creating and connecting the Mongo database. 

Kyle da Silva took the lead on the backend of the application, in particular the integration of external APIs. He also was responsible for the backend notification logic, in particular doing the calculations necessary for plant notifications.

## Reflections after deployment 

Below are the intial plans when we first started on the project. For the most part the plan for the app stayed consistent, and we managed to complete almost all the minimal and standard goals we set for ourselves despite only two people in the team. The major exception is to have the app be able to suggest plants to a user based on their location. The reason we were not able to to complete this was partially due to the fact that we under estimated the availablity of data, and the difficulty of the task without the right data. A bigger lesson of this project is that when an app is built around external APIs, the app will be limited by those APIs. For this particular issue, detailed historical weather data as well as geographical information would have been needed to make the suggestions. A larger scale version of this app would be able to get this information and implement suggestions. Detailed historical weather data in particular tends to be expensive. And geographical information (on soil, for example) would require an entirely new data set. 

Another example of a difficulty caused by limitations of an external API was the notifications to water a plant. The app currently used a naive algorithm to decide on weather a plant should be watered. It takes the total amount of water a plant needs in a given season, divides it by days in the season, and then checks if the plant has received that much water that day. However plants aren't quite so simple. Some plants need regular watering, others prefer infrequent watering. The API we used for plant data did not include information that fine grained, so we had to make the algorithm more naive than it should be. 

The primary places for improvement for this app would be in the notification logic, as described above, as well as getting more data to improve notifications and add suggestions. Tracking and customizability could also be improved. Custom picture uploads, as well as more detailed tracking beyond the notes currently in the app would make the app more useful for tracking the health of plants. 

## Additional contributions

Beyond the technologies taught in class, our biggest additional contributes were integrating external APIs. Making calls to external APIs were very briefly touched on in the node.js / backend workshop, but we went well beyond anything taught in that workshop. We integrated 3 APIs into our app (Google Maps, Dark Sky, Trefle). Beyond just using the APIs individually, we use the information together to create the notifications our app, which is a central portion of our project. Also some of the styling in our app went well beyond anything taught in the first workshop (look at our loading spinner!). 


## Initial plans, requirements, and description. 

### Project description:  
- who is it for? Gardeners, landscapers, plant enthusiasts, etc. 
- what will it do? Track plants, notify user when plant maintenance is required (i.e. watering), allow user to search for plants that will grow in their area. 
- what type of data will it store? Data related to their plant "inventory", times since last maintenance (i.e. watering). 
- what will users be able to do with this data? Add plants to their inventory, search new plants to add, track maintenance. 
- what is some additional functionality you can add/remove based on time constraints? Spatial display, social media integration, photo imports from web (see "Stretch requirements" below).  

### Requirements: 

Minimal requirements (3-5) - will definitely complete: 
- plant search, select and store. 
- weather API integration. 
- suggestions based on location, weather, etc. 
- single garden management. 
- functional UI. 

Standard requirements (3-7) - will most likely complete: 
- slick UI with animations, smooth transitions etc.  
- multiple garden management. 
- rich data display on plants, plant needs, etc.  
- push notifications. 
- plant tracking functionality - add notes, etc. 
- add custom photos. 

Stretch requirements (2-3) - hope to complete one: 
- add a property display where people could place their plants relative to their home in space. 
- social media integration - share your garden with your friends! 
- import photos from Flickr, Instagram, Tumblr, etc. 

### Sketch prototypes:  

![Sketch of home window.](https://github.com/dasilvar93/GRDN/blob/master/home-sketch.JPG)

![Sketch of garden and plant windows.](https://github.com/dasilvar93/GRDN/blob/master/garden-plant-sketch.JPG)  

## Notes on first design/code review: 

- is the garden covered or uncovered 
- richer filters for suggestions 
- richer push notifications 
- when to plant 
- pest control 
- invasive species 
- plant maintenance difficulty 
- talk to experts
