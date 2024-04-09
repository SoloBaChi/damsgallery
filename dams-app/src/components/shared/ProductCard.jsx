import React from "react";

function ProductCard({ className, imgSrc, description, title, price }) {
  return (
    <div className={`card  ${className}`}>
      <div className="card-header img-container">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <h3> $ {price}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
