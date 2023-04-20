import axios from 'axios';
import { useState, useMemo } from 'react';

export const latitude = 40.23
export const longitude = 3.7
// navigator.geolocation.getCurrentPosition((position) => position.coords.latitude)

export const useFetchWeather = () => {

  const [lat, setLat] = useState(latitude);
  const [lon, setLon] = useState(longitude);
  const [weather, setWeather] = useState(); //ver si objeto (lo es en nasa) o array(lo era en forecast)
  const [weatherError, setWeatherError] = useState(false);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  // const [permission, setPermission] = useState(); //mostrar debes...
         
  useMemo(() => {
    setWeatherLoaded(false);
    setWeatherError(false);
    
    const getWeather = async () => {
            try {
              const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
                import.meta.env.VITE_API_KEY
                }`);
              return res.data
              // en la otra era return [...forecast, ...res.data.list]
            } catch (err) {
              setWeatherError(true);
              //Si no doy permiso, mensaje activarlos para poder utilizar la aplicación.
            }
          };
      
          getWeather().then((data) => {
            setWeather(data);
            setWeatherLoaded(true);
          });
        }, [lat, lon]);
        console.log(weather)
        return { weather, weatherError, weatherLoaded };
      };


      export const useFetchForecast = () => {

        const [lat, setLat] = useState(latitude);
        const [lon, setLon] = useState(longitude);
        const [forecast, setForecast] = useState(); // array(lo era en forecast)
        const [forecastError, setForecastError] = useState(false);
        const [forecastLoaded, setForecastLoaded] = useState(false);
        // const [permission, setPermission] = useState(); //mostrar debes...
               
        useMemo(() => {
          setForecastLoaded(false);
          setForecastError(false);
          
          const getForecast = async () => {
                  try {
                    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
                      import.meta.env.VITE_API_KEY
                      }`);
                    return res.data?.list
                    // en la otra era return [...forecast, ...res.data.list]
                  } catch (err) {
                    setForecastError(true);
                    //Si no doy permiso, mensaje activarlos para poder utilizar la aplicación.
                  }
                };
            
                getForecast().then((data) => {
                  setForecast(data);
                  setForecastLoaded(true);
                });
              }, [lat, lon]);
              console.log(forecast)
              return { forecast, forecastError, forecastLoaded };
            };

      