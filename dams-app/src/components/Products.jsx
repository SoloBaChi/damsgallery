import React from "react";
import SeeMore from "./SeeMore";
import { useNavigate } from "react-router-dom";
// import { ProductsData } from "./shared/data/data";
import ProductCard from "./shared/ProductCard";

// import "../styles/Products.css";
function Products({ productData }) {
  const navigate = useNavigate();
  return (
    <section className="product-section">
      <h6 className="section-title">Explore</h6>
      <h2>our products</h2>
      <div className="flex-container-4">
        {productData.map((product) => (
          <div
            key={product._id}
            onClick={() => {
              navigate(`/products/${product._id}`);
            }}
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <SeeMore />
    </section>
  );
}

export default Products;
