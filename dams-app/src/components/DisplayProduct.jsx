import React from "react";
import { useParams } from "react-router-dom";
// import { ProductsData } from "./shared/data/data";
import { useNavigate } from "react-router-dom";
import ProductCard from "./shared/ProductCard";

function DisplayProduct({
  addToCart,
  removeFromCart,
  decreaseQuantiy,
  productData,
}) {
  const { productId } = useParams();
  console.log(productId);
  const navigate = useNavigate();

  const selectedProduct = productData.filter((item) => item._id === productId);
  return (
    <section className="product-section display-product">
      {selectedProduct.map((product) => (
        <div key={product._id}>
          <ProductCard {...product} />
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
