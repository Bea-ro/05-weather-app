import React from 'react';
import cities from '../../data/cities';

const ByCity = () => {

  const handleSelect = (ev) => ev.target.value

  return (
    <div>
      <select name="city" id="city">
      
         {cities.map((city) => (
         <option value={city.name}>{city.name}</option>
         )
         )}

      </select>
      <Link to="next-days">próximos días</Link>
    </div>
  );
};

export default ByCity;
