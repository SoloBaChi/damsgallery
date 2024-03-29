import React from "react";
import "../../styles/Card.css";

const Card = ({ className, imgSrc, text, title, price }) => {
  return (
    <div className={`card  ${className}`}>
      <div className="card-header img-container">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="card-footer">
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
