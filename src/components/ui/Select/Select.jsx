import React from 'react';
import './Select.css';
import { cities } from '../../../data/cities';
import { background } from '../../../config/colors';

const Select = ({ city, setCity, climate }) => {
  const handleSelect = (ev) => setCity(ev.target.value);

  return (
    <>
      <select
        name="city"
        value={city}
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
