import React from 'react';
import './Home.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

//`http://openweathermap.org/img/w/${iconcode}.png`
//iconos Open Weather / otros

const Home = ({weather, error, loaded, icon} ) => {
  return (
    <main style={{
      backgroundColor: icon.backgroundColor,
      color: icon.color
    }}>  
  <WeatherCard weather={weather} error={error} loaded={loaded}/>
    </main>
  );
};

export default Home;
