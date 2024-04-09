import { useEffect, useState } from "react";
import Main from "./components/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  //SOme Functionality were done here which is the root top most component
  // steps
  // fetch the data from the database

  // process with the  cart details
  const [cartItem, setCartItem] = useState(handleCartItems());

  // ADD TO CART
  const adddToCart = (product) => {
    const exisitingProduct = cartItem.find((item) => item.id === product.id);

    //if the product exist, update the cartItem by increasing the quantity
    if (exisitingProduct) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...exisitingProduct, qty: exisitingProduct.qty + 1 }
            : item,
        ),
      );
    } else {
      // add a new cartItem
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (product) => {
    // get the product to be removed
    const exisitingProduct = cartItem.find((item) => item.id === product.id);
    if (exisitingProduct) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    }
  };

  // DECREASE CART QUANTITY
  const decreasQuantity = (product) => {
    const exisitingProduct = cartItem.find((item) => item.id === product.id);
    // get the product quantity
    if (exisitingProduct.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...exisitingProduct, qty: exisitingProduct.qty - 1 }
            : item,
        ),
      );
    }
  };

  // store added cart items
  function handleCartItems() {
    // convert the returned carts to plain js object
    const addedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    return addedCartItems || [];
  }

  useEffect(() => {
    // convert the stored carts in JSON format
    const storage = JSON.stringify(cartItem);
    localStorage.setItem("cartItems", storage);
  }, [cartItem]);

  return (
    <div>
      <Main
        addToCart={adddToCart}
        removeFromCart={removeFromCart}
        decreasQuantity={decreasQuantity}
        cartItem={cartItem}
      />
    </div>
  );
}

export default App;
