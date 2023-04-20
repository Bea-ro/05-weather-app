import React from 'react';
import './Home.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';


const Home = ( {weather, weatherError, weatherLoaded} ) => {

  return (
    <main>  
  <WeatherCard weather={weather} weatherError={weatherError} weatherLoaded={weatherLoaded} climate={weather?.weather[0].main}/>
    </main>
  );
};

export default Home;
