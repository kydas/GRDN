import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloudRain, faMoon, faCloud, faSnowflake, faWind, faTemperatureLow, faTint } from '@fortawesome/free-solid-svg-icons';


const dateParams = { weekday: "long", year: "numeric", month: "long", day: "numeric" };


class WeatherWidget extends Component {

  render() {
    if (this.props.garden == null || this.props.garden.weather == null || this.props.garden.weather.length == 0 || this.props.garden.weather[0] == null) {
      return (
        <div className="weather-widget">
          <h2>Weather</h2>
          No weather found for this location!
        </div>
      )
    }
    let weather = this.props.garden.weather[this.props.garden.weather.length - 1];
    let time = new Date(weather.time * 1000);
    return (
      <div className="weather-widget">
        <h2>Weather</h2>
        Last updated: {time.toLocaleDateString("en-US", dateParams)}
        <div className="col third">
          <div className="weather-icon">{this.icons[weather.icon.replace('-','')]}<p className="weather-label">{weather.icon.replace('-', ' ')}</p></div>
        </div>
        <div className="col two-thirds">
          <p className="temp"><FontAwesomeIcon icon={faTemperatureLow} /> {weather.minTemp}°C-{weather.maxTemp}°C</p>
          <p className="precip"><FontAwesomeIcon icon={faTint} /> {weather.precipitation}mm</p>
        </div>
        <a href="https://darksky.net/poweredby/" target="_blank">Powered by Darksky.</a><br/>
      </div>
    )
  }

  icons = {
    rain: <FontAwesomeIcon icon={faCloudRain} />,
    clearday: <FontAwesomeIcon icon={faSun} />,
    clearnight: <FontAwesomeIcon icon={faMoon} />,
    snow: <FontAwesomeIcon icon={faSnowflake} />,
    sleet: <FontAwesomeIcon icon={faSnowflake} />,
    wind: <FontAwesomeIcon icon={faWind} />,
    fog: <FontAwesomeIcon icon={faCloud} />,
    cloudy: <FontAwesomeIcon icon={faCloud} />,
    partlycloudyday: <FontAwesomeIcon icon={faCloud} />,
    partlycloudynight: <FontAwesomeIcon icon={faCloud} />
  }
}

export default WeatherWidget;
