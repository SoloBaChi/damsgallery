import React from "react";
import Card from "./shared/Card";
import SeeMore from "./SeeMore";
import { useNavigate } from "react-router-dom";
import { ProductsData } from "./shared/data/data";

// import "../styles/Products.css";
function Products(props) {
  const navigate = useNavigate();
  return (
    <section className="product-section">
      <h6 className="section-title">Explore</h6>
      <h2>our products</h2>
      <div className="flex-container-4">
        {ProductsData.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            <Card {...product} />
          </div>
        ))}
      </div>
      <SeeMore />
    </section>
  );
}

export default Products;
