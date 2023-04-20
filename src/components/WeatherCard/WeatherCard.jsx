import React from 'react';
import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faWind, faWater, faEye, faSnowflake, faCloud } from '@fortawesome/free-solid-svg-icons';
import Circle from '../Circle/Circle';
import Location from '../Location/Location';
import MainIcon from '../MainIcon/MainIcon';
import MainInfo from '../MainInfo/MainInfo';
import { background, textColor } from '../../config/colors';

const WeatherCard = ( {weather, weatherError, weatherLoaded, climate} ) => {
  
const kilometersHour = Math.round((weather?.wind.speed * 3600)/1000)

  return (
    <div className="weather-card" style={{
      backgroundColor: background[climate],
      color: textColor[climate]
    }}>
   
   <Circle id="circle-two" 
   property={weather?.rain? "Precipitaciones": "Dirección viento"}
   icon={weather?.rain? <FontAwesomeIcon icon={faUmbrella} className="secondary-icon"/> : <FontAwesomeIcon icon={faWind} className="secondary-icon"/>}  
   value={weather?.rain? `${weather?.rain?.["1h"]} mm última h` : `${weather?.wind.deg}°`}/>
   
<Circle id="circle-three" 
   property="Humedad" 
   icon={<FontAwesomeIcon icon={faWater} className="secondary-icon"/>}  
   value={`${weather?.main.humidity}%`}/>
<Circle id="circle-four" 
   property="Visibilidad" 
   icon={<FontAwesomeIcon icon={faEye} className="secondary-icon"/>}  
   value={`${weather?.visibility/1000} km`}/>
<Circle id="empty-circle"/>
<Circle id="empty-circle"/>

<Location/>

<Circle id="empty-circle"/>
<Circle id="circle-one" 
   property="Viento" 
   icon={<FontAwesomeIcon icon={faWind} className="secondary-icon"/>}  
   value={`${kilometersHour} km/h`}/>
     <MainIcon icon={weather?.weather[0].main}
     />
     <MainInfo weather={weather}/>
<Circle id="circle-five" 
   property={weather?.snow? "Cota de nieve" : "Nubes"}
   icon={weather?.snow? <FontAwesomeIcon icon={faSnowflake} className="secondary-icon"/> : <FontAwesomeIcon icon={faCloud} className="secondary-icon"/>}  
   value={weather?.snow? `${weather?.snow/1000} m` : `${weather?.clouds.all}%`}/>
      
    </div>
  )
}

export default WeatherCard