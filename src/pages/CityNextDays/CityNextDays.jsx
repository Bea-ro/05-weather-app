import React from 'react';
import CityForecastCard from '../../components/Cards/CityForecastCard';
import Loading from '../../components/ui/Loading/Loading';
import { useFetchCityForecast } from '../../services/fetch';
import { useParams } from 'react-router-dom';
import { cities } from '../../data/cities';
import DataError from '../../components/ui/DataError/DataError';

const CityNextDays = () => {
  const { city } = useParams();
  const updatedCity = cities.find(cit => cit.name === city);
  const { cityForecast, cityForecastError, cityForecastLoaded } = useFetchCityForecast(updatedCity.id);
  
  return (
    <main>
       {cityForecastError?  <DataError /> : 
      cityForecastLoaded ? (
        <CityForecastCard
          city={updatedCity}
          cityForecast={cityForecast}
          climate={cityForecast[0].weather[0].main}
        />
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default CityNextDays;
