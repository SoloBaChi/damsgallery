import React from "react";
import ProductCartItem from "./shared/ProductCartItem";

function Cart({ cartItem }) {
  console.log(cartItem);
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0,
  );
  return (
    <section className="cart-section">
      {cartItem.length === 0 && (
        <h5 className="no-items">Nothing has been added to the cart!!!</h5>
      )}
      <div className="flex-container-2">
        <div className="flex-item">
          {cartItem.map((item) => (
            <div key={item.id}>
              <ProductCartItem {...item} />
            </div>
          ))}
        </div>
        <div className="cart-sumamry">
          <h3>cart summary</h3>
          <p>
            Total Price : <span> ${totalPrice}</span>
          </p>
          <div className="checkout">
            <button className="cta-btn">
              {cartItem.length === 0 ? "nothing to checkout" : "Pay Now"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
