import React from 'react';
import './Card.css';
const Card = ({ title, image, footer }) => {
  return (
    <div className="card-container">
      <img
        src={image}
        alt={title}
      />
      <span>{title}</span>
      <span>{footer}</span>
    </div>
  );
};

export default Card;
