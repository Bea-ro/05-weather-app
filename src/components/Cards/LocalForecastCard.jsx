import React from 'react';
import './Cards.css';
import Circle from '../Circle/Circle';
import Location from '../Location/Location';
import MainIcon from '../MainIcon/MainIcon';
import MainInfo from '../MainInfo/MainInfo';
import { background } from '../../config/colors';


const LocalForecastCard = ( { localWeather, localForecast, climate } ) => {

const getNextDay = (qty) => {
  const transformDt = new Date(localForecast[0].dt*1000+24*60*60*1000*qty).toLocaleString('es-ES')
  const fragment = transformDt.split('/')
  const nextDay = fragment[2].slice(0, 4) + '-' + (fragment[1] <10 ? '0' + fragment[1] : fragment[1]) + '-' + (fragment[0] <10 ? '0' + fragment[0] : fragment[0]) + ' ' + fragment[2].slice(6, 14)
  return nextDay
}

const getFormatedNextDay = (day) => {
  const dateOnly = getNextDay(day).slice(0,10);
  const fragments = dateOnly.split('-');
  return fragments[2] + '/' + fragments[1] + '/' + fragments[0]
}
  
const getForecastDescription = (day) => {
const dayFilter = localForecast?.filter((fore) => {
      return (fore.dt_txt).slice(0,10) ===  (getNextDay(day)).slice(0,10)
   })
const description = dayFilter[0].weather[0].main
return description
}

const getForecastTempMin = (day) => {
  const dayFilter = localForecast?.filter((fore) => {
        return (fore.dt_txt).slice(0,10) ===  (getNextDay(day)).slice(0,10)
     })
  const tempMin = Math.round(dayFilter.reduce((acc, tm) => acc + tm.main.temp_min, 0)/dayFilter.length)
  return tempMin
  }

  const getForecastTempMax = (day) => {
    const dayFilter = localForecast?.filter((fore) => {
          return (fore.dt_txt).slice(0,10) ===  (getNextDay(day)).slice(0,10)
       })
    const tempMax = Math.round(dayFilter.reduce((acc, tm) => acc + tm.main.temp_max, 0)/dayFilter.length) 
    return tempMax
    }

  
    return (
      <div className="weather-card" style={{
        backgroundColor: background[climate]
      }}>


    <Circle id="circle-two" 
      property={getFormatedNextDay(2)}
      icon={<MainIcon icon={getForecastDescription(2)}/>}  
      value={`${getForecastTempMin(2)}° - ${getForecastTempMax(2)}°`}
      />
      
   <Circle id="circle-three" 
     property={getFormatedNextDay(3)}
     icon={<MainIcon icon={getForecastDescription(3)}/>}  
      value={`${getForecastTempMin(3)}° - ${getForecastTempMax(3)}°`}/>
   <Circle id="circle-four" 
   property={getFormatedNextDay(4)}
   icon={<MainIcon icon={getForecastDescription(4)}/>}  
      value={`${getForecastTempMin(4)}° - ${getForecastTempMax(4)}°`}/>
   <Circle id="empty-circle"/>
   <Circle id="empty-circle"/>
   
   <Location city={localWeather?.name}/>
   
   <Circle id="empty-circle"/>
   <Circle id="circle-one" 
      property={getFormatedNextDay(1)}
      icon={<MainIcon icon={getForecastDescription(1)}/>}  
      value={`${getForecastTempMin(1)}° - ${getForecastTempMax(1)}°`}/>
        <MainIcon icon={localForecast[0].weather[0].main}/>
        <MainInfo localWeather={localWeather}/>
   <Circle id="circle-five" 
       property={getFormatedNextDay(5)}
       icon={<MainIcon icon={getForecastDescription(5)}/>}  
      value={`${getForecastTempMin(5)}° - ${getForecastTempMax(5)}°`}
      />
    
      </div>
    )
  }
  
  export default LocalForecastCard






