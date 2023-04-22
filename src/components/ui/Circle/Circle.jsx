import React from 'react';
import './Circle.css';

const Circle = ({ id, property, icon, value }) => {
  return (
    <div className="circle" id={id}>
      <div className="secondary-info-container">
        <p>{property}</p>
        <figure className="secondary-info">
          {icon}
          <p>{value} </p>
        </figure>
      </div>
    </div>
  );
};

export default Circle;
