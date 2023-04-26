import React from 'react';
import './Cards.css';
import Circle from '../ui/Circle/Circle';
import Location from '../ui/Location/Location';
import MainIcon from '../ui/MainIcon/MainIcon';
import MainInfo from '../ui/MainInfo/MainInfo';
import { background } from '../../config/colors';
import { getFormatedNextDay, getForecastDescription, getForecastTempMax, getForecastTempMin } from '../../utils/forecastData';


const CityForecastCard = ({ city, cityForecast, climate }) => {

  const dt = cityForecast[0].dt
    
  return (
    <div
      className="weather-card"
      style={{
        backgroundColor: background[climate]
      }}
    >
      <Circle
        id="circle-two"
        property={getFormatedNextDay(dt, 2)}
        icon={<MainIcon icon={getForecastDescription(cityForecast, dt, 2,4)} />}
        value={`${getForecastTempMin(cityForecast, dt, 2)}° - ${getForecastTempMax(cityForecast, dt, 2)}°`}
      />

      <Circle
        id="circle-three"
        property={getFormatedNextDay(dt, 3)}
        icon={<MainIcon icon={getForecastDescription(cityForecast, dt, 3,4)} />}
        value={`${getForecastTempMin(cityForecast, dt, 3)}° - ${getForecastTempMax(cityForecast, dt, 3)}°`}
      />
      <Circle
        id="circle-four"
        property={getFormatedNextDay(dt, 4)}
        icon={<MainIcon icon={getForecastDescription(cityForecast, dt, 4,4)} />}
        value={`${getForecastTempMin(cityForecast, dt, 4)}° - ${getForecastTempMax(cityForecast, dt, 4)}°`}
      />

      <Location city={city.name} />
      
      <Circle
        id="circle-one"
        property={getFormatedNextDay(dt, 1)}
        icon={<MainIcon icon={getForecastDescription(cityForecast, dt, 1,4)} />}
        value={`${getForecastTempMin(cityForecast, dt, 1)}° - ${getForecastTempMax(cityForecast, dt, 1)}°`}
      />
       <div class="main-icon-info">
      <MainIcon icon={cityForecast[0].weather[0].main} />
      <MainInfo property={cityForecast[0]} />
      </div>
      <Circle
        id="circle-five"
        property={getFormatedNextDay(dt, 5)}
        icon={<MainIcon icon={getForecastDescription(cityForecast, dt, 5,0)} />}
        value={`${getForecastTempMin(cityForecast, dt, 5)}° - ${getForecastTempMax(cityForecast, dt, 5)}°`}
      />
    </div>
  );
};

export default CityForecastCard;
