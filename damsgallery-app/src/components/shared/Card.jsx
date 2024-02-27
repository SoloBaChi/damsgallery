import React from "react";
import "../../styles/Card.css";

const Card = ({ className, imgSrc, text, title }) => {
  return (
    <div className={`card  ${className}`}>
      <div className="card-header img-container">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
