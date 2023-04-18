import React from 'react';
import './NextDays.css';
import Circle from '../../components/Circle/Circle';
import Location from '../../components/Location/Location';
import MainIcon from '../../components/MainIcon/MainIcon';
import MainInfo from '../../components/MainInfo/MainInfo';
import { background, textColor } from '../../config/colors';
import { getFormatedNextDay, getNextDay } from '../../utils/days';


const NextDays = ({weather, climate, setApi, api}) => {

setApi('forecast')
console.log(api) //sale weather, analizar respuesta

const getDescription = (day) => {
   const dayFilter = weather?.filter((fore) => {
      return (fore.dt_txt).slice(0,10) ===  getNextDay(day).slice(0,10)
   })
  return dayFilter[0].weather[0].main
}
 
const getTempMin = (day) => {
   const dayFilter = weather?.filter((fore) => {
      return (fore.dt_txt).slice(0,10) ===  getNextDay(day).slice(0,10)
   })
 return Math.round(dayFilter.reduce((acc, tm) => acc + tm.main.temp_min, 0)/dayFilter.length)
}

const getTempMax = (day) => {
   const dayFilter = weather?.filter((fore) => {
      return (fore.dt_txt).slice(0,10) ===  getNextDay(day).slice(0,10)
   })
  return Math.round(dayFilter.reduce((acc, tm) => acc + tm.main.temp_max, 0)/dayFilter.length) 
}


  return (
<div className="weather-card" style={{
      backgroundColor: background[climate],
      color: textColor[climate]
    }}>
   
    <Circle id="circle-two" 
    property={getFormatedNextDay(2)}
   icon={<MainIcon icon={getDescription(2)}/> }  
   value={`${getTempMin(2)}°- ${getTempMax(2)}°`}
   />
   
   
<Circle id="circle-three"
property={getFormatedNextDay(3)} 
icon={<MainIcon icon={getDescription(3)}/> }  
   value={`${getTempMin(3)}° - ${getTempMax(3)}°`}
   />

<Circle id="circle-four" 
    property={getFormatedNextDay(4)}
    icon={<MainIcon icon={getDescription(4)}/> }  
   value={`${getTempMin(4)}° - ${getTempMax(4)}°`}
   />
<Circle id="empty-circle"/>
<Circle id="empty-circle"/> 

<Location/>

<Circle id="empty-circle"/>
<Circle id="circle-one"
property={getFormatedNextDay(1)} 
icon={<MainIcon icon={getDescription(1)}/> }    
   value={`${getTempMin(1)}° - ${getTempMax(1)}°`}
   />
     <MainIcon icon={getDescription(1)}/>
     {/* <MainInfo weather={weather}/> */}
<Circle id="circle-five"
property={getFormatedNextDay(5)} 
icon={<MainIcon icon={getDescription(5)}/> }  
   value={`${getTempMin(5)}° - ${getTempMax(5)}°`}
   />
       
    </div>
  )
}

export default NextDays