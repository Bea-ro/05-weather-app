import React from 'react';
import LocalWeatherCard from '../../components/Cards/LocalWeatherCard';


const Home = ( {localWeather, localWeatherError, localWeatherLoaded} ) => {

  return (
    <main>  
{localWeatherLoaded ?   

  (<LocalWeatherCard localWeather={localWeather} climate={localWeather?.weather[0].main}/>)
     : (<h2 className="message">Cargando datos...</h2>)
}   
</main>
  );
};

export default Home;
