import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ByCity from './pages/ByCity/ByCity';
import NextDays from './pages/NextDays/NextDays';
import CityNextDays from './pages/CityNextDays';
import Footer from './components/Footer/Footer';
import { useFetchLocalWeather, useFetchLocalForecast, useFetchCityWeather, useFetchCityForecast } from './services/fetch';
import { useState, useEffect } from 'react';


function App() {
  
  const [permission, setPermission] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  
  useEffect(() => {
  
    navigator.geolocation.getCurrentPosition((position) => {
          
      const coords = position.coords;
      setLat(coords.latitude)
      setLon(coords.longitude)
      })
      setPermission(true)
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED){
        setPermission(false) //y mostrar debes...
      }
    }, [])

  const { localWeather, localWeatherError, localWeatherLoaded } = useFetchLocalWeather(lat,lon);
  const { localForecast, localForecastError, localForecastLoaded } = useFetchLocalForecast(lat,lon)
  
  const [city, setCity] = useState('Madrid')
  const { cityWeather, cityWeatherError, cityWeatherLoaded } = useFetchCityWeather(city)
  const { cityForecast, cityForecastError, cityForecastLoaded } = useFetchCityForecast(city)
  
  return (
    <>
     <Header />
      <Routes>
        <Route index element={<Home localWeather={localWeather} localWeatherError={localWeatherError} localWeatherLoaded={localWeatherLoaded}/>} />
        <Route path="/proximos-dias" element={<NextDays localWeather={localWeather} localWeatherLoaded={localWeatherLoaded} localForecast={localForecast}
        localForecastError={localForecastError}
        localForecastLoaded={localForecastLoaded}
        />}/> 
        <Route path="/otras-ciudades" element={<ByCity city={city} setCity={setCity} cityWeather={cityWeather} cityWeatherError={cityWeatherError} cityWeatherLoaded={cityWeatherLoaded}/>}/>
        <Route path="/otras-ciudades/proximos-dias-ciudad" element={<CityNextDays cityWeather={cityWeather} cityWeatherLoaded={cityWeatherLoaded} cityForecast={cityForecast} cityForecastError={cityForecastError} cityForecastLoaded={cityForecastLoaded}/>}/>
      
      </Routes>
      <Footer />
      </>
  )
}

export default App
