import React from "react";

function ProductCartItem({
  className,
  imgSrc,
  description,
  title,
  price,
  qty,
}) {
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
        <h4>
          Price : ${price}.00 * {qty}
        </h4>
      </div>
    </div>
  );
}

export default ProductCartItem;
