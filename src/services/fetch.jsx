import axios from 'axios';
import { useState, useEffect } from 'react';

const latitude = 40.23
const longitude = 3.7
// navigator.geolocation.getCurrentPosition((position) => position.coords.latitude)

export const fetch = () => {

  const [api, setApi] = useState('weather') //forecast
  const [lat, setLat] = useState(latitude);
  const [lon, setLon] = useState(longitude);
  const [weather, setWeather] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const [permission, setPermission] = useState(); //mostrar debes...
  
  useEffect(() => {
    setLoaded(false);
    setError(false);
    
    const getWeather = async () => {
            try {
              const res = await axios.get('data.json');
              return res.data;
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
        }, [api]);
        console.log(weather)
        return { weather, error, loaded };
        
      };



// const fetch = () => {

//   const [lat, setLat] = useState(latitude);
//   const [lon, setLon] = useState(longitude);
//   const [weather, setWeather] = useState({});
//   const [error, setError] = useState(false);
//   const [loaded, setLoaded] = useState(false);
//   // const [permission, setPermission] = useState(); //mostrar debes...
  
//   useEffect(() => {
//     setLoaded(false);
//     setError(false);
    
//     const getWeather = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.openweathermap.org/data/2.5/{api}?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${
//             import.meta.env.VITE_API_KEY
//           }`
//         );
//         return res.data;
//       } catch (err) {
//         setError(true);
//         //Si no doy permiso, mensaje activarlos para poder utilizar la aplicación.
//       }
//     };

//     getWeather().then((data) => {
//       console.log(data)
//       setWeather(data);
//       setLoaded(true);
//     });
//   }, []);
//   return { weather, error, loaded };
  
// };
