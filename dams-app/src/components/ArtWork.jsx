import React from "react";
import Products from "./Products";

function ArtWork({ productData }) {
  return (
    <section className="product-section">
      <Products productData={productData} />
    </section>
  );
}

export default ArtWork;
