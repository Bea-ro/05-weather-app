import React from 'react';
import './ByCity.css';
import Select from '../../components/ui/Select/Select';
import CityWeatherCard from '../../components/Cards/CityWeatherCard';
import { Link } from 'react-router-dom';
import { background } from '../../config/colors';
import Loading from '../../components/ui/Loading/Loading';

const ByCity = ({ city, setCity, cityWeather, cityWeatherError, cityWeatherLoaded }) => {
  return (
    <div>
      <div className="city-options">
        <Select city={city} setCity={setCity} climate={cityWeather?.weather[0].main} />
        <Link
          to="proximos-dias-ciudad"
          className="city-days-link"
          style={{
            backgroundColor: background[cityWeather?.weather[0].main],
            color:"white"
          }}
        >
          Próximos días en {city}
        </Link>
      </div>
      {cityWeatherLoaded ? (
        <CityWeatherCard
          city={city}
          cityWeather={cityWeather}
          climate={cityWeather?.weather[0].main}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ByCity;
