import React from 'react';
import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faWind, faWater } from '@fortawesome/free-solid-svg-icons';
import Circle from '../Circle/Circle';
import MainIcon from '../MainIcon/MainIcon';
import MainInfo from '../MainInfo/MainInfo';
import Location from '../Location/Location';

const WeatherCard = ( {weather, error, loaded} ) => {
  
  return (
    <div className="weather-card">
   
   <Circle id="circle-two" 
   property="Viento" 
   icon={<FontAwesomeIcon icon={faWind} className="secondary-icon"/>}  
   value={weather?.wind.speed}/>
<Circle id="circle-three" 
   property="Humedad" 
   icon={<FontAwesomeIcon icon={faWater} className="secondary-icon"/>}  
   value={weather?.main.humidity}/>
<Circle id="circle-four" 
   property="Humedad" 
   icon={<FontAwesomeIcon icon={faWater} className="secondary-icon"/>}  
   value={weather?.main.humidity}/>
<Circle id="empty-circle"/>
<Circle id="empty-circle"/>

<Location/>

<Circle id="empty-circle"/>
<Circle id="circle-one" 
   property="Precipitaciones" 
   icon={<FontAwesomeIcon icon={faUmbrella} className="secondary-icon"/>}  
   value={weather?.weather[0].rain}/>
     <MainIcon icon={weather?.weather[0].main}/>
     <MainInfo weather={weather}/>
<Circle id="circle-five" 
   property="Precipitaciones" 
   icon={<FontAwesomeIcon icon={faUmbrella} className="secondary-icon"/>}  
   value={weather?.weather[0].rain}/>
      
    </div>
  )
}

export default WeatherCard