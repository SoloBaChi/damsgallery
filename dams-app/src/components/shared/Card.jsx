import React from "react";
import "../../styles/Card.css";

const Card = ({ className, imgSrc, description, title, price }) => {
  return (
    <div className={`card  ${className}`}>
      <div className="card-header img-container">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
