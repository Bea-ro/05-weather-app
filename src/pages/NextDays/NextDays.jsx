import React, {useState} from 'react';
import LocalForecastCard from '../../components/Cards/LocalForecastCard';
import Loading from '../../components/ui/Loading/Loading';
import { useFetchLocalForecast } from '../../services/fetch';
import DataError from '../../components/ui/DataError/DataError';

const NextDays = ({lat, lon}) => {
  
  const { localForecast, localForecastError, localForecastLoaded } = useFetchLocalForecast(
    lat,
    lon
  );

  return (
    <main>
       {localForecastError?  <DataError /> : 
      localForecastLoaded ? (
        <LocalForecastCard
          localForecast={localForecast}
          climate={localForecast.list[0].weather[0].main}
        />
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default NextDays;
