import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ByCity from './pages/ByCity/ByCity';
import NextDays from './pages/NextDays/NextDays';
import Footer from './components/Footer/Footer';
import { useFetchWeather, useFetchForecast } from './services/fetch';


function App() {

  const { weather, weatherError, weatherLoaded } = useFetchWeather();
  const { forecast, forecastError, forecastLoaded } = useFetchForecast()
  
  return (
    <>
     <Header />
      <Routes>
        <Route index element={<Home weather={weather} weatherError={weatherError} weatherLoaded={weatherLoaded}/>} />
        <Route path="/proximos-dias" element={<NextDays weather={weather} forecast={forecast}
        forecastError={forecastError}
        forecastLoaded={forecastLoaded}
        />}/> 
        <Route path="/otras-ciudades" element={<ByCity/>}/>
      
      </Routes>
      <Footer />
      </>
  )
}

export default App
