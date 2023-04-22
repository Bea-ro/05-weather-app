import axios from 'axios';
import { useState, useMemo, useEffect } from 'react';

export const useFetchLocalWeather = (lat, lon) => {
 
  const [localWeather, setLocalWeather] = useState(); 
  const [localWeatherError, setLocalWeatherError] = useState(false);
  const [localWeatherLoaded, setLocalWeatherLoaded] = useState(false);

  useMemo(() => {
    setLocalWeatherLoaded(false);
    setLocalWeatherError(false);

    const getLocalWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        return res.data;
      } catch (err) {
        setLocalWeatherError(true);
        // throw new Error('Error fetching weather data at your location')
      }
    };

    getLocalWeather().then((data) => {
      setLocalWeather(data);
      setLocalWeatherLoaded(true);
    });
  }, [lat, lon]);
  console.log(localWeatherError)
  return { localWeather, localWeatherError, localWeatherLoaded };
};

export const useFetchLocalForecast = (lat, lon) => {

  const [localForecast, setLocalForecast] = useState();
  const [localForecastError, setLocalForecastError] = useState(false);
  const [localForecastLoaded, setLocalForecastLoaded] = useState(false);
  
  useMemo(() => {
    setLocalForecastLoaded(false);
    setLocalForecastError(false);

    const getLocalForecast = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        return res.data?.list;
      } catch (err) {
        setLocalForecastError(true);
      }
    };

    getLocalForecast().then((data) => {
      setLocalForecast(data);
      setLocalForecastLoaded(true);
    });
  }, [lat, lon]);

  return { localForecast, localForecastError, localForecastLoaded };
};


export const useFetchCityWeather = (city) => {
  
  const [cityWeather, setCityWeather] = useState();
  const [cityWeatherError, setCityWeatherError] = useState(false);
  const [cityWeatherLoaded, setCityWeatherLoaded] = useState(false);
  
  useEffect(() => {
    setCityWeatherLoaded(false);
    setCityWeatherError(false);

    const getCityWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        return res.data;
      } catch (err) {
        setCityWeatherError(true);
      }
    };

    getCityWeather().then((data) => {
      setCityWeather(data);
      setCityWeatherLoaded(true);
    });
  }, [city]);

  return { cityWeather, cityWeatherError, cityWeatherLoaded };
};

export const useFetchCityForecast = (city) => {

  const [cityForecast, setCityForecast] = useState();
  const [cityForecastError, setCityForecastError] = useState(false);
  const [cityForecastLoaded, setCityForecastLoaded] = useState(false);
  
  useEffect(() => {
    setCityForecastLoaded(false);
    setCityForecastError(false);

    const getCityForecast = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=sp&appid=${
            import.meta.env.VITE_API_KEY
          }`
        );
        return res.data?.list;
      } catch (err) {
        setCityForecastError(true);
      }
    };

    getCityForecast().then((data) => {
      setCityForecast(data);
      setCityForecastLoaded(true);
    });
  }, [city]);

  return { cityForecast, cityForecastError, cityForecastLoaded };
};