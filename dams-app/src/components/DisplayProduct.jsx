import React from "react";
import { useParams } from "react-router-dom";
import Card from "./shared/Card";
import { ProductsData } from "./shared/data/data";
import { useNavigate } from "react-router-dom";

function DisplayProduct({ addToCart, removeFromCart, decreaseQuantiy }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const selectedProduct = ProductsData.filter((item) => item.id === +productId);
  return (
    <section className="product-section display-product">
      {selectedProduct.map((product) => (
        <div key={product.id}>
          <Card {...product} />
          <h6>you have selected the product {product.title}</h6>
          <div className="cta-btn-container">
            <button
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              className="cta-btn"
            >
              add to cart
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default DisplayProduct;
