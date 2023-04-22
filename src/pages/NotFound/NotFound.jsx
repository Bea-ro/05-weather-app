import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import './LoadingError.css'

const NotFound = () => {
  return (
    <main>
         <figure className="loading-error-figure">
<h2 className="loading-error-message">Error 404: esta página no existe.</h2>
<FontAwesomeIcon icon={faCompass} className="loading-error-icon"/>
</figure>
    </main>
  )
}

export default NotFound