import React from 'react';
import { Link } from 'react-router-dom';

//tiempo actual en grados Celsius
//weather.icon: const iconUrl = `http://openweathermap.org/img/w/${iconcode}.png`
//iconos Open Weather / otros

const Home = ( {weather, error, loaded } ) => {
  return (
    <div>
       {/* <p>Temperatura: {weather.main.temp}</p>
       <p>Sensación térmica: {weather.main.feels_like}</p>
       <p>Descripción: {weather.weather[0].description}</p>
       
       <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].main}/> */}
             
      <p>Prueba Home</p>
      <Link to="por-ciudad">por ciudad</Link>
      <Link to="proximos-dias">próximos días</Link>
    
    </div>
  );
};

export default Home;
