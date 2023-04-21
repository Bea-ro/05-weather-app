import React from 'react'
import './Location.css';
import { date, time } from '../../utils/days';

const Location = ( {city} ) => {

  return (
    <div className="location">
         <figure>  
       <p>{city}</p>
        <p>{date} - {time}</p>
       </figure>
        </div>
  )
}

export default Location