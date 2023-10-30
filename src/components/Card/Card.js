import React from 'react';
import './Card.css'

const Card = ({ title, price, rating, icon }) => {
  return (
    <div className="card">
      
      <div className="card-header">
        <h3>{title}</h3>
        <div className="rating">
          <span>{rating}</span>
          <i className="icon">{icon}</i>
        </div>
      </div>
      <div className="card-body">
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default Card;
