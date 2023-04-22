import React from 'react';
import '../../pages/NotFound/LoadingError.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';


const Loading = () => {
  return (
    <figure className="loading-error-figure">
<h2 className="loading-error-message">Cargando datos...</h2>
<FontAwesomeIcon icon={faTemperatureHalf} className="loading-error-icon"/>
</figure>
  )
}

export default Loading