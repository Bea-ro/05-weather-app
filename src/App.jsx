import './App.css';
import { Route, Routes } from 'react-router-dom';
import { fetch } from './services/fetch';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ByCity from './pages/ByCity/ByCity';
import NextDays from './pages/NextDays/NextDays';
import Footer from './components/Footer/Footer';

function App() {
  
  const { weather, error, loaded } = fetch();

  return (
    <>
     <Header />
      <Routes>
        <Route index element={<Home weather={weather} error={error} loaded={loaded}/>} />
        <Route path="/por-ciudad"
          element={<ByCity weather={weather} error={error} loaded={loaded} />}
        />
        <Route path="/proximos-dias"
          element={<NextDays weather={weather} error={error} loaded={loaded} />}
        />
      </Routes>
      <Footer />
      </>
  )
}

export default App
