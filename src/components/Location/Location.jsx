import React from 'react'
import './Location.css';
import { date, time } from '../../utils/days';

const Location = () => {

  return (
    <div className="location">
         <figure>  
       <p>Pinto, Madrid</p>
        <p>{date} - {time}</p>
       </figure>
        </div>
  )
}

export default Location