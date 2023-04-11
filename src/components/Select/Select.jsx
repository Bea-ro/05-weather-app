import React from 'react';
import './Select.css';
import cities from '../../data/cities';

const Select = () => {

    // const handleSelect = (ev) => setCity(ev.target.value) 

  return (
    <>
         <select name="city" id="city">
      
      {cities.map((city) => (
      <option key={city.name} value={city.name}>{city.name}</option>
      )
      )}

   </select>
    </>
  )
}

export default Select