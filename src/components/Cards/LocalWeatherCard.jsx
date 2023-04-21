import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faWind, faWater, faEye, faSnowflake, faCloud } from '@fortawesome/free-solid-svg-icons';
import Circle from '../Circle/Circle';
import Location from '../Location/Location';
import MainIcon from '../MainIcon/MainIcon';
import MainInfo from '../MainInfo/MainInfo';
import { background, textColor } from '../../config/colors';

const LocalWeatherCard = ( {localWeather, climate} ) => {
  
const kilometersHour = Math.round((localWeather?.wind.speed * 3600)/1000)

  return (
    <div className="weather-card" style={{
      backgroundColor: background[climate],
      color: textColor[climate]
    }}>
   
   <Circle id="circle-two" 
   property={localWeather?.rain? "Precipitaciones": "Dirección viento"}
   icon={localWeather?.rain? <FontAwesomeIcon icon={faUmbrella} className="secondary-icon"/> : <FontAwesomeIcon icon={faWind} className="secondary-icon"/>}  
   value={localWeather?.rain? `${localWeather?.rain?.["1h"]} mm última h` : `${localWeather?.wind.deg}°`}/>
   
<Circle id="circle-three" 
   property="Humedad" 
   icon={<FontAwesomeIcon icon={faWater} className="secondary-icon"/>}  
   value={`${localWeather?.main.humidity}%`}/>
<Circle id="circle-four" 
   property="Visibilidad" 
   icon={<FontAwesomeIcon icon={faEye} className="secondary-icon"/>}  
   value={`${localWeather?.visibility/1000} km`}/>
<Circle id="empty-circle"/>
<Circle id="empty-circle"/>

<Location city={localWeather?.name}/>

<Circle id="empty-circle"/>
<Circle id="circle-one" 
   property="Viento" 
   icon={<FontAwesomeIcon icon={faWind} className="secondary-icon"/>}  
   value={`${kilometersHour} km/h`}/>
     <MainIcon icon={localWeather?.weather[0].main}
     />
     <MainInfo localWeather={localWeather}/>
<Circle id="circle-five" 
   property={localWeather?.snow? "Cota de nieve" : "Nubes"}
   icon={localWeather?.snow? <FontAwesomeIcon icon={faSnowflake} className="secondary-icon"/> : <FontAwesomeIcon icon={faCloud} className="secondary-icon"/>}  
   value={localWeather?.snow? `${localWeather?.snow/1000} m` : `${localWeather?.clouds.all}%`}/>
      
    </div>
  )
}

export default LocalWeatherCard