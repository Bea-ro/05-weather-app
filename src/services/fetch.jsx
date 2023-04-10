import { useState, useEffect } from 'react';
import axios from 'axios';
import mokedData from '../data/moke';

//TIP: copiar respuesta en objeto en componentes y usar mientras 
//la de los 5 días es igual pero con forecast en vez de weather

const latitude = 40.23
const longitude = 3.7
// navigator.geolocation.getCurrentPosition((position) => position.coords.latitude)

const fetch = () => {

  const [lat, setLat] = useState(latitude);
  const [lon, setLon] = useState(longitude);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const [permission, setPermission] = useState(); //mostrar debes...
  
  useEffect(() => {
    setLoaded(false);
    setError(false);
    
    const getWeather = async () => {
      try {
        return mokedData;
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
  }, []);
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
//           `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&appid=${
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

export default fetch