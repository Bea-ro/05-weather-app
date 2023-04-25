import React from 'react';
import '../../../pages/NotFound/LoadingError.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const Localization = () => {
  return (
    <figure className="loading-error-figure">
      <h2 className="loading-error-message">Autoriza la geolocalización en tu navegador
      <br/>para ver el tiempo en tu localidad.</h2>
      <FontAwesomeIcon icon={faCompass} className="loading-error-icon" />
    </figure>
  );
};

export default Localization;
