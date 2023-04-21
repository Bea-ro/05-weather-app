import React from 'react';
import CityForecastCard from '../components/Cards/CityForecastCard';

const CityNextDays = ( {cityWeather, cityWeatherLoaded, cityForecast, cityForecastError, cityForecastLoaded} ) => {

  return (
   <main>  
{cityWeatherLoaded && cityForecastLoaded ?    

     (<CityForecastCard cityWeather={cityWeather} cityForecast={cityForecast}  
      climate={cityForecast[0].weather[0].main}/>)
      : (<h2 className="message">Cargando datos...</h2>)
}   
    </main>
  )
}

export default CityNextDays