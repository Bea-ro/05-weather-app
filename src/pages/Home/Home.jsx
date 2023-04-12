import React from 'react';
import './Home.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

//`http://openweathermap.org/img/w/${iconcode}.png`
//iconos Open Weather / otros

const Home = ({weather, error, loaded} ) => {
  return (
    <main>  
  <WeatherCard weather={weather} error={error} loaded={loaded}/>
    </main>
  );
};

export default Home;
