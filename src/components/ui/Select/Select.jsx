import React from 'react';
import './Select.css';
import { cities } from '../../../data/cities';
import { background } from '../../../config/colors';

const Select = ({ city, setCity, climate }) => {

  const handleSelect = (ev) => {
    const selectedCity = cities.find(city => city.name === ev.target.value);
    setCity(selectedCity); 
  };

  return (
    <>
      <select
        name="city"
        value={city.name}
        onChange={handleSelect}
        style={{
          backgroundColor: background[climate],
        }}
      >
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
  
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
