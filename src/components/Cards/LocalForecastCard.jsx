import React from 'react';
import './Cards.css';
import Circle from '../ui/Circle/Circle';
import Location from '../ui/Location/Location';
import MainIcon from '../ui/MainIcon/MainIcon';
import MainInfo from '../ui/MainInfo/MainInfo';
import { background } from '../../config/colors';
import { getFormatedNextDay, getForecastDescription, getForecastTempMax, getForecastTempMin } from '../../utils/forecastData';

const LocalForecastCard = ({ localForecast, climate }) => {

  const dt = localForecast.list[0].dt
  const list = localForecast?.list
  
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
        icon={<MainIcon icon={getForecastDescription(list, dt, 2,4)} />}
        value={`${getForecastTempMin(list, dt, 2)}° - ${getForecastTempMax(list, dt, 2)}°`}
      />

      <Circle
        id="circle-three"
        property={getFormatedNextDay(dt, 3)}
        icon={<MainIcon icon={getForecastDescription(list, dt, 3,4)} />}
        value={`${getForecastTempMin(list, dt, 3)}° - ${getForecastTempMax(list, dt, 3)}°`}
      />
      <Circle
        id="circle-four"
        property={getFormatedNextDay(dt, 4)}
        icon={<MainIcon icon={getForecastDescription(list, dt, 4,4)} />}
        value={`${getForecastTempMin(list, dt, 4)}° - ${getForecastTempMax(list, dt, 4)}°`}
      />
        <Location city={localForecast?.city.name} />
    <Circle
        id="circle-one"
        property={getFormatedNextDay(dt, 1)}
        icon={<MainIcon icon={getForecastDescription(list, dt, 1,4)} />}
        value={`${getForecastTempMin(list, dt, 1)}° - ${getForecastTempMax(list, dt, 1)}°`}
      />
       <div class="main-icon-info">
      <MainIcon icon={localForecast.list[0].weather[0].main} />
      <MainInfo property={localForecast.list[0]}/>
      </div>
      <Circle
        id="circle-five"
        property={getFormatedNextDay(dt, 5)}
        icon={<MainIcon icon={getForecastDescription(list, dt, 5,0)} />}
        value={`${getForecastTempMin(list, dt, 5)}° - ${getForecastTempMax(list, dt, 5)}°`}
      />
    </div>
  );
};

export default LocalForecastCard;
