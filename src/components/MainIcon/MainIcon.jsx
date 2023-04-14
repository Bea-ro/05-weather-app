import React from 'react';
import './MainIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faSnowflake, faCloudShowersHeavy, faCloudBolt,
faSmog, } from '@fortawesome/free-solid-svg-icons';

const MainIcon = ( {icon} ) => {
  return (
    <div className="main-icon-container">
       {
       icon === 'Clouds' ? (<FontAwesomeIcon icon={faCloud} className="main-icon"/>) : 
       icon === 'Clear' ? (<FontAwesomeIcon icon={faSun} className="main-icon"/>) :
       icon === 'Snow' ? (<FontAwesomeIcon icon={faSnowflake} className="main-icon"/>) :
       icon === 'Rain' ? (<FontAwesomeIcon icon={faCloudShowersHeavy} className="main-icon"/>) :
       icon === 'Thunderstorm' ? (<FontAwesomeIcon icon={faCloudBolt} className="main-icon"/>) :
       icon === 'Mist' ? (<FontAwesomeIcon icon={faSmog} className="main-icon"/>) :   
       (<></>)
}
    </div>
  )
}

export default MainIcon


