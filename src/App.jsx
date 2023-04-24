import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ByCity from './pages/ByCity/ByCity';
import NextDays from './pages/NextDays/NextDays';
import CityNextDays from './pages/CityNextDays/CityNextDays';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [permission, setPermission] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;
        setPermission(true)
        setLat(coords.latitude);
        setLon(coords.longitude);
      },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        setPermission(false); //y mostrar debes...
      }}
      )}, [])
      
  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={
            <Home
              lat={lat}
              lon={lon}
            />
          }
        />
        <Route
          path="/proximos-dias"
          element={
            <NextDays
            lat={lat}
            lon={lon}
            />
          }
        />
        <Route
          path="/otras-ciudades"
          element={
            <ByCity/>
          }
        />
        <Route
          path="/otras-ciudades/proximos-dias/:city"
          element={
            <CityNextDays/>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
