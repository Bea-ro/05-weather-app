import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';;
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ByCity from './pages/ByCity/ByCity';
import NextDays from './pages/NextDays/NextDays';
import CityNextDays from './pages/CityNextDays/CityNextDays';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

 
function App() {

  const [permission, setPermission] = useState();
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
    const coords = position.coords;
    setPermission(true)
    localStorage.setItem('lat', coords.latitude);
    localStorage.setItem('lon', coords.longitude);

  },
(error) => {
  if (error.code === error.PERMISSION_DENIED) {
    setPermission(false); 
  }}
)}, [])
  
  return (  
      <>
      <Header/>
      <Routes>
        <Route
          index
          element={
            <Home permission={permission} setPermission={setPermission}/>
          }
        />
        <Route
          path="/proximos-dias"
          element={
            <NextDays permission={permission}/>
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
