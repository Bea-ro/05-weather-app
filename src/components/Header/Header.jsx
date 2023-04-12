import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
        <li>
          <Link to="/">El tiempo</Link>
        </li>
          <li>
          <Link to="por-ciudad">Por ciudad</Link>
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