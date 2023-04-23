import React from 'react';
import CityForecastCard from '../../components/Cards/CityForecastCard';
import Loading from '../../components/ui/Loading/Loading';
import { useFetchCityForecast } from '../../services/fetch';
import { useParams } from 'react-router-dom';

const CityNextDays = () => {
  const { city } = useParams()
  const { cityForecast, cityForecastError, cityForecastLoaded } = useFetchCityForecast(city);
  
  return (
    <main>
      {cityForecastLoaded ? (
        <CityForecastCard
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
