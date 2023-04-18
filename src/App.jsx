import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ByCity from './pages/ByCity/ByCity';
import NextDays from './pages/NextDays/NextDays';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <>
     <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/por-ciudad" element={<ByCity/>}/>
        <Route path="/proximos-dias" element={<NextDays/>}/>
      </Routes>
      <Footer />
      </>
  )
}

export default App
