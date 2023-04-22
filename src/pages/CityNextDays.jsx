import React from 'react';
import CityForecastCard from '../components/Cards/CityForecastCard';
import Loading from '../components/Loading/Loading';

const CityNextDays = ( {cityWeather, cityWeatherLoaded, cityForecast, cityForecastError, cityForecastLoaded} ) => {

  return (
   <main>  
{cityWeatherLoaded && cityForecastLoaded ?    

     (<CityForecastCard cityWeather={cityWeather} cityForecast={cityForecast}  
      climate={cityForecast[0].weather[0].main}/>)
      : (<Loading/>)
}   
    </main>
  )
}

export default CityNextDays