import React from 'react';
import './Home.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';


//`http://openweathermap.org/img/w/${iconcode}.png`
//iconos Open Weather / otros

const Home = ({weather, error, loaded} ) => {
  return (
    <div>  
  <WeatherCard weather={weather} error={error} loaded={loaded}/>
    
    </div>
  );
};

export default Home;
