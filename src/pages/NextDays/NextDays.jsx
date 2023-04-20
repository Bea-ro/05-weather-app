import React from 'react';
import './NextDays.css';
import ForecastCard from '../../components/ForecastCard/ForecastCard';

const NextDays = ( {weather, forecast, forecastError, forecastLoaded} ) => {

  return (
   <main>  
   <ForecastCard weather={weather} forecast={forecast} forecastError={forecastError} forecastLoaded={forecastLoaded} 
      climate={forecast[0].weather[0].main}
   />
    </main>
  )
}

export default NextDays