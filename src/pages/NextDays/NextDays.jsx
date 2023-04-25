import React from 'react';
import LocalForecastCard from '../../components/Cards/LocalForecastCard';
import Loading from '../../components/ui/Loading/Loading';
import { useFetchLocalForecast } from '../../services/fetch';
import DataError from '../../components/ui/DataError/DataError';
import Localization from '../../components/ui/Localization/Localization';

const NextDays = ( {permission} ) => {

  const latitude = localStorage.getItem('lat')
  const longitude = localStorage.getItem('lon')

  const { localForecast, localForecastError, localForecastLoaded } = useFetchLocalForecast(latitude,longitude)

//40.2392621,-3.7130592
  
return (
    <main>
      {!permission ? <Localization /> : (
        localForecastError ? 
        <DataError />
       : localForecastLoaded ? (
        <LocalForecastCard
          localForecast={localForecast}
          climate={localForecast.list[0].weather[0].main}
        />
      ) : <Loading />
      )}
          </main>
  );
};

export default NextDays;