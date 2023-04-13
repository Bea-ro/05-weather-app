import React from 'react';
import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters, faUmbrella, faWind, faWater } from '@fortawesome/free-solid-svg-icons';
import MainIcon from '../MainIcon/MainIcon';

const WeatherCard = ( {weather, error, loaded} ) => {
  
  const iconUrl = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
  
  return (
    <section className="weather-card">
      
      <article className="main-info">
      <MainIcon icon={weather?.weather[0].main}/>
      <p className="temp-number">{Math.round(weather?.main.temp)}°</p>
      <p className="temp-word">{weather?.weather[0].description}</p>     
      <p className="feel-like">Sensación térmica <span className="feel-number">{Math.round(weather?.main.feels_like)}°</span></p>
    
      </article>  

      <article className="secondary-info">
      
      <div className="temp-secondary-info">
      <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="secondary-icon" />
      <p className="temp-secondary-text">Mínima <span className="number">{Math.round(weather?.main.temp_min)}°</span> - Máxima <span className="number">{Math.round(weather?.main.temp_max)}°</span></p>
      </div>
      
       <div className="other-secondary-info">    
       <FontAwesomeIcon icon={faUmbrella} className="secondary-icon"/>
       <p>Precipitaciones:  </p>
       <FontAwesomeIcon icon={faWind} className="secondary-icon"/> 
       <p>Viento velocidad: {weather?.wind.speed} </p>
       <FontAwesomeIcon icon={faWater} className="secondary-icon"/> 
       <p>Humedad: {weather?.main.humidity} </p>
       </div>
       
       </article>

    </section>
  )
}

export default WeatherCard