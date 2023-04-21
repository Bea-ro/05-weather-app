import React from 'react';
import LocalForecastCard from '../../components/Cards/LocalForecastCard';

const NextDays = ( {localWeather, localWeatherLoaded, localForecast, localForecastError, localForecastLoaded} ) => {

  return (
   <main>  
{localWeatherLoaded && localForecastLoaded ?    

     (<LocalForecastCard localWeather={localWeather} localForecast={localForecast}  
      climate={localForecast[0].weather[0].main}/>)
      : (<h2 className="message">Cargando datos...</h2>)
}   
    </main>
  )
}

export default NextDays