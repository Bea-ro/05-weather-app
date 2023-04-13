import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
        <li>
          <Link to="/">hoy</Link>
        </li>
          <li>
          <Link to="por-ciudad">Otras ciudades</Link>
        </li>
        <li>
          <Link to="proximos-dias">Próximos días</Link>
        </li>
        </ul>
        </nav>

    </header>
  )
}

export default Header