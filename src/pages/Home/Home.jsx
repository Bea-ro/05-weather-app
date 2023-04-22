import React from 'react';
import LocalWeatherCard from '../../components/Cards/LocalWeatherCard';
import Loading from '../../components/Loading/Loading';


const Home = ( {localWeather, localWeatherError, localWeatherLoaded} ) => {

  return (
    <main>  
{/* {localWeatherError? (<h2 className="loading-message">No se han podido obtener los datos</h2>) : */}

{localWeatherLoaded ?   

  (<LocalWeatherCard localWeather={localWeather} climate={localWeather?.weather[0].main}/>)
   : (<Loading/>)
}   
</main>
  );
};

export default Home;


    
      
  