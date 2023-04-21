import React from 'react';
import './ByCity.css';
import Select from '../../components/Select/Select';
import CityWeatherCard from '../../components/Cards/CityWeatherCard';
import { Link } from 'react-router-dom';
import { background, textColor } from '../../config/colors';

const ByCity = ( { city, setCity, cityWeather, cityWeatherError, cityWeatherLoaded } ) => {

  return (
    <div>
      <div className="city-options">
     <Select city={city} setCity={setCity} climate={cityWeather?.weather[0].main}/>
     <Link to="proximos-dias-ciudad" className="city-days-link" style={{
      backgroundColor: background[cityWeather?.weather[0].main],
      color: textColor[cityWeather?.weather[0].main]
    }}>Próximos días en {city}</Link>
     </div>
     {cityWeatherLoaded ?  
  <CityWeatherCard city={city} cityWeather={cityWeather} climate={cityWeather?.weather[0].main}/>
   
  : (<h2 className="message">Cargando datos...</h2>)
}   
    </div>
  );
};

export default ByCity;
