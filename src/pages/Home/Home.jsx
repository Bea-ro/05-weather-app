import React from 'react';
import LocalWeatherCard from '../../components/Cards/LocalWeatherCard';
import Loading from '../../components/ui/Loading/Loading';
import DataError from '../../components/ui/DataError/DataError';

const Home = ({ localWeather, localWeatherError, localWeatherLoaded }) => {
  return (
    <main>
      {localWeatherError?  <DataError /> : 

      localWeatherLoaded ? (
        <LocalWeatherCard localWeather={localWeather} climate={localWeather?.weather[0].main} />
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Home;
