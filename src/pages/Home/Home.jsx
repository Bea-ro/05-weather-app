import React from 'react';
import './Home.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';


const Home = ({weather, error, loaded} ) => {
  return (
    <main>  
  <WeatherCard weather={weather} error={error} loaded={loaded} climate={weather?.weather[0].main}/>
    </main>
  );
};

export default Home;
