import React from 'react';
import '../../../pages/NotFound/LoadingError.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';

const DataError = () => {
  return (
    <figure className="loading-error-figure">
      <h2 className="loading-error-message">En estos momentos no se puede acceder a los datos. 
      <br />Puedes intentarlo más tarde.</h2>
      <FontAwesomeIcon icon={faBoltLightning} className="loading-error-icon" />
    </figure>
  );
};

export default DataError;
