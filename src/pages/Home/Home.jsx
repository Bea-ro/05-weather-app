import React from 'react';
import LocalWeatherCard from '../../components/Cards/LocalWeatherCard';
import Loading from '../../components/ui/Loading/Loading';
import DataError from '../../components/ui/DataError/DataError';
import { useFetchLocalWeather } from '../../services/fetch';
import Localization from '../../components/ui/Localization/Localization';

const Home = ({ permission }) => {

  const latitude = localStorage.getItem('lat')
  const longitude = localStorage.getItem('lon')

  const { localWeather, localWeatherError, localWeatherLoaded } = useFetchLocalWeather(latitude, longitude);

  return (
    <main>

{!permission ? <Localization /> : (
      
      localWeatherError ? <DataError /> : 
      localWeatherLoaded ? (
        <LocalWeatherCard localWeather={localWeather} climate={localWeather?.weather[0].main} />
      ) : 
        <Loading />
     
)
      }
    </main>
  );
};

export default Home;
