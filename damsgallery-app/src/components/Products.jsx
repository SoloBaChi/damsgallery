import React from "react";
import Card from "./shared/Card";

import "../styles/Product.css";

function Products(props) {
  return (
    <div>
      <small>Explore</small>
      <h2>our products</h2>
      <div className="flex-container-4">
        <Card
          className="product-card"
          imgSrc={`/assets/product-card-image-1.svg`}
          title={`Painting 1`}
          text={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci laborum pariatur debitis molestias odio non deleniti corporis, distinctio fuga id sit nemo temporibus eum dolorem.`}
        />
        <Card
          className="product-card"
          imgSrc={`/assets/product-card-image-2.svg`}
          title={`Painting 1`}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci laborum pariatur debitis molestias odio non deleniti corporis, distinctio fuga id sit nemo temporibus eum dolorem.`}
        />
        <Card
          className="product-card"
          imgSrc={`/assets/product-card-image-3.svg`}
          title={`Painting 1`}
          text={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci laborum pariatur debitis molestias odio non deleniti corporis, distinctio fuga id sit nemo temporibus eum dolorem.`}
        />
        <Card
          className="product-card"
          imgSrc={`/assets/product-card-image-4.svg`}
          title={`Painting 1`}
          text={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci laborum pariatur debitis molestias odio non deleniti corporis, distinctio fuga id sit nemo temporibus eum dolorem.`}
        />
      </div>
    </div>
  );
}

export default Products;
