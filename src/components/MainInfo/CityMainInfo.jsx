import React from 'react';
import './MainInfo.css';

const MainInfo = ( {cityWeather} ) => {
  return (
    <div className="main-info">
         <figure>
    
      <p className="temp-number">{Math.round(cityWeather?.main.temp)}° </p>
      <p>Mínima <span className="number">{Math.round(cityWeather?.main.temp_min)}°
      </span> - Máxima <span className="number">{Math.round(cityWeather?.main.temp_max)}°</span>
      </p>
      <p className="feel-like">Sensación térmica <span className="feel-number">{Math.round(cityWeather?.main.feels_like)}°</span></p>
      </figure>  
    </div>
  )
}

export default MainInfo