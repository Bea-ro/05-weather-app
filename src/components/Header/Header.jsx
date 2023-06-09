import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Hoy</Link>
          </li>
          <li>
            <Link to="proximos-dias">Próximos días</Link>
          </li>
          <li>
            <Link to="otras-ciudades">Otras ciudades</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
