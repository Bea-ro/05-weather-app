import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
          <li>
          <Link to="por-ciudad">por ciudad</Link>
        </li>
        <li>
          <Link to="proximos-dias">próximos días</Link>
        </li>
        </ul>
        </nav>

    </header>
  )
}

export default Header