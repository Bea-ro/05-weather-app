import React from 'react';
import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';
import TempIcon from '../TempIcon/TempIcon';

const WeatherCard = ( {weather, error, loaded} ) => {
  
  const iconUrl = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
  
  return (
    <section className="weather-card">
      
      <article className="weather-description">
      <TempIcon description={weather?.weather[0].description}/>
      <div className="desc-temp">
      <p>{weather?.weather[0].description}</p>
      <p className="temp">{Math.round(weather?.main.temp)} °</p>
      </div>
      </article>

      <article className="temp-info">
      <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="temp-icon" />
      <div className="temp-details">
      <p>Mínima: <span className="number">{Math.round(weather?.main.temp_min)} °</span> - Máxima: <span className="number">{Math.round(weather?.main.temp_max)} °</span></p>
      <p>Sensación térmica: <span className="number">{Math.round(weather?.main.feels_like)} °</span></p>
      </div>
      </article>
       
       <article className="additional-info-container">   
       <figure className="additional-info">
       <FontAwesomeIcon icon={faUmbrella} className="additional-icon"/>
       <p>Precipitaciones:  </p>
       </figure>

       <figure className="additional-info">
       <FontAwesomeIcon icon={faWind} className="additional-icon"/> 
       <p>Viento velocidad: {weather?.wind.speed} </p>
       </figure>
       </article>

    </section>
  )
}

export default WeatherCard