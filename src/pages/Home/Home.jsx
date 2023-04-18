import React from 'react';
import './Home.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { useFetchWeather } from '../../services/fetch';

const Home = () => {

const { weather, error, loaded } = useFetchWeather();

  return (
    <main>  
  <WeatherCard weather={weather} error={error} loaded={loaded} climate={weather?.weather[0].main}/>
    </main>
  );
};

export default Home;
