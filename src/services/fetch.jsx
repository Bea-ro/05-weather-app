import axios from 'axios';
import { useState, useEffect } from 'react';

export const latitude = 40.23
export const longitude = 3.7
// navigator.geolocation.getCurrentPosition((position) => position.coords.latitude)

export const useFetchWeather = () => {

  const [lat, setLat] = useState(latitude);
  const [lon, setLon] = useState(longitude);
  const [weather, setWeather] = useState(); //ver si objeto (lo es en nasa) o array(lo era en forecast)
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const [permission, setPermission] = useState(); //mostrar debes...
         
  useEffect(() => {
    setLoaded(false);
    setError(false);
    
    const getWeather = async () => {
            try {
              const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
                import.meta.env.VITE_API_KEY
                }`);
              return res.data
              // en la otra era return [...forecast, ...res.data.list]
            } catch (err) {
              setError(true);
              //Si no doy permiso, mensaje activarlos para poder utilizar la aplicación.
            }
          };
      
          getWeather().then((data) => {
            console.log(data)
            setWeather(data);
            setLoaded(true);
          });
        }, [lat, lon]);
        console.log(weather)
        return { weather, error, loaded };
      };

      export const useFetchForecast = () => {

        const [lat, setLat] = useState(latitude);
        const [lon, setLon] = useState(longitude);
        const [forecast, setForecast] = useState();
        const [error, setError] = useState(false);
        const [loaded, setLoaded] = useState(false);
        // const [permission, setPermission] = useState(); //mostrar debes...
               
        useEffect(() => {
          setLoaded(false);
          setError(false);
          
          const getForecast = async () => {
                  try {
                    const res = await axios.get(
                      // '../../public/dato.json'
                      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
                      import.meta.env.VITE_API_KEY
                      }`
                      );
                    return res.data?.list
                  } catch (err) {
                    setError(true);
                    //Si no doy permiso, mensaje activarlos para poder utilizar la aplicación.
                  }
                };
            
                getForecast().then((data) => {
                  console.log(data)
                  setForecast(data);
                  setLoaded(true);
                });
              }, []);
              console.log(forecast)
              return { forecast, error, loaded };
            };