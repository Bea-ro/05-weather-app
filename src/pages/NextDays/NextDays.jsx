import React from 'react';
import LocalForecastCard from '../../components/Cards/LocalForecastCard';
import Loading from '../../components/Loading/Loading';

const NextDays = ( {localWeather, localWeatherLoaded, localForecast, localForecastError, localForecastLoaded} ) => {

  return (
   <main>  
{localWeatherLoaded && localForecastLoaded ?    

     (<LocalForecastCard localWeather={localWeather} localForecast={localForecast}  
      climate={localForecast[0].weather[0].main}/>)
      : (<Loading/>)
}   
    </main>
  )
}

export default NextDays