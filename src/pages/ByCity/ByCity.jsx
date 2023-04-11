import React from 'react';
import Select from '../../components/Select/Select';
import './ByCity.css';
import { Link } from 'react-router-dom';


const ByCity = () => {

  return (
    <div>
     <Select/>
      <Link to="next-days">próximos días</Link>
    </div>
  );
};

export default ByCity;
