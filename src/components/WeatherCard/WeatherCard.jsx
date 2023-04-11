import React from 'react';
import './WeatherCard.css';


const WeatherCard = ( {weather, error, loaded} ) => {
  
  const iconUrl = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
  
  return (
    <div>
            <p>Temperatura: {weather?.main.temp}</p>
       <p>Sensación térmica: {weather?.main.feels_like}</p>
       <p>Descripción: {weather?.weather[0].description}</p>    
       <img src={iconUrl} alt={weather?.weather[0].main}/>
    </div>
  )
}

export default WeatherCard