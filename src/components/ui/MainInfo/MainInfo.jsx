import React from 'react';
import './MainInfo.css';

const MainInfo = ({ property }) => {
  return (
    <div className="main-info">
      <figure>
        <p className="temp-number">{Math.round(property?.main.temp)}° </p>
        <p>
          Mínima <span className="number">{Math.round(property?.main.temp_min)}°</span> - Máxima{' '}
          <span className="number">{Math.round(property?.main.temp_max)}°</span>
        </p>
        <p className="feel-like">
          Sensación térmica{' '}
          <span className="feel-number">{Math.round(property?.main.feels_like)}°</span>
        </p>
      </figure>
    </div>
  );
};

export default MainInfo;
