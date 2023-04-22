import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        Página creada por Beatriz Rodríguez para
        <a href="https://www.rockthecode.es/" target="blank" rel="noopener noreferrer">
          {' '}
          {'{Rock theCode}'}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
