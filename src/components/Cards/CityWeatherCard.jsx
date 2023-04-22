import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUmbrella,
  faWind,
  faWater,
  faEye,
  faSnowflake,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import Circle from '../ui/Circle/Circle';
import Location from '../ui/Location/Location';
import MainIcon from '../ui/MainIcon/MainIcon';
import CityMainInfo from '../ui/MainInfo/CityMainInfo';
import { background } from '../../config/colors';

const CityWeatherCard = ({ cityWeather, climate }) => {
  const kilometersHour = Math.round((cityWeather?.wind.speed * 3600) / 1000);

  return (
    <div
      className="weather-card"
      id="city-weather-card"
      style={{
        backgroundColor: background[climate]
      }}
    >
      <Circle
        id="circle-two"
        property={cityWeather?.rain ? 'Precipitaciones' : 'Dirección viento'}
        icon={
          cityWeather?.rain ? (
            <FontAwesomeIcon icon={faUmbrella} className="secondary-icon" />
          ) : (
            <FontAwesomeIcon icon={faWind} className="secondary-icon" />
          )
        }
        value={
          cityWeather?.rain
            ? `${cityWeather?.rain?.['1h']} mm última h`
            : `${cityWeather?.wind.deg}°`
        }
      />

      <Circle
        id="circle-three"
        property="Humedad"
        icon={<FontAwesomeIcon icon={faWater} className="secondary-icon" />}
        value={`${cityWeather?.main.humidity}%`}
      />
      <Circle
        id="circle-four"
        property="Visibilidad"
        icon={<FontAwesomeIcon icon={faEye} className="secondary-icon" />}
        value={`${cityWeather?.visibility / 1000} km`}
      />
      <Circle id="empty-circle" />
      <Circle id="empty-circle" />

      <Location city={cityWeather?.name} />

      <Circle id="empty-circle" />
      <Circle
        id="circle-one"
        property="Viento"
        icon={<FontAwesomeIcon icon={faWind} className="secondary-icon" />}
        value={`${kilometersHour} km/h`}
      />
      <MainIcon icon={cityWeather?.weather[0].main} />
      <CityMainInfo cityWeather={cityWeather} />
      <Circle
        id="circle-five"
        property={cityWeather?.snow ? 'Cota de nieve' : 'Nubes'}
        icon={
          cityWeather?.snow ? (
            <FontAwesomeIcon icon={faSnowflake} className="secondary-icon" />
          ) : (
            <FontAwesomeIcon icon={faCloud} className="secondary-icon" />
          )
        }
        value={cityWeather?.snow ? `${cityWeather?.snow / 1000} m` : `${cityWeather?.clouds.all}%`}
      />
    </div>
  );
};

export default CityWeatherCard;
