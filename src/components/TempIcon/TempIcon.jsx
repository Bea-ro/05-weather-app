import React from 'react';
import './TempIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const TempIcon = ( {description} ) => {
  return (
    <div className="description-icon">
       {
       description === 'nubes' ? (<FontAwesomeIcon icon={faCloud} className="main-icon"/>) : 
       (<></>)
}
    </div>
  )
}

export default TempIcon


