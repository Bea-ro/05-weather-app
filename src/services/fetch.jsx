import axios from 'axios';
import { useState, useEffect } from 'react';

const latitude = 40.23
const longitude = 3.7
// navigator.geolocation.getCurrentPosition((position) => position.coords.latitude)

export const fetch = () => {

  
  const [lat, setLat] = useState(latitude);
  const [lon, setLon] = useState(longitude);
  const [api, setApi] = useState('weather')
  const [weather, setWeather] = useState(); //ver si objeto (lo es en nasa) o array(lo era en forecast)
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const [permission, setPermission] = useState(); //mostrar debes...
         
  useEffect(() => {
    setLoaded(false);
    setError(false);
    
    const getWeather = async () => {
            try {
              if (api === 'weather') {
              const res = await axios.get( 
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
              import.meta.env.VITE_API_KEY
              }`);
              return res.data;
              } else {
                const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
                import.meta.env.VITE_API_KEY
                }`);
              return res.data?.list} // en la otra era return [...forecast, ...res.data.list]
            } catch (err) {
              setError(true);
              //Si no doy permiso, mensaje activarlos para poder utilizar la aplicación.
            }
          };
      
          getWeather().then((data) => {
            console.log(data)
            setWeather(data);
            console.log(weather)
            setLoaded(true);
          });
        }, [lat, lon, api]);
        console.log(weather)
        return { api, setApi, weather, error, loaded };
        
      };