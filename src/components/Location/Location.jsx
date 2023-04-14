import React from 'react'
import './Location.css'

const Location = () => {

    const date = Intl.DateTimeFormat('es-ES').format(new Date());
  const time = new Date().getHours() + ':' + new Date().getMinutes()

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