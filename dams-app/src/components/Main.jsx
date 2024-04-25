import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import ArtWork from "./ArtWork";
import Artists from "./Artists";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Subscribe from "./Subscribe";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Cart from "./Cart";
import SearchPage from "./SearchPage";
import SuccessfulRegistration from "./SuccessfulRegistration";
import Dashborad from "./Dashboard";
import AccountVerification from "./AccountVerification";
import AdminUpload from "./AdminUpload";
import SuccessActivation from "./SucessActivation";
import Products from "./Products";
import DisplayProduct from "./DisplayProduct";
import SucessfulUpload from "./SucessfulUpload";
// import { ProductsData } from "./shared/data/data";
// import SucessfulUpload from "./SucessfulUpload";

const Main = ({
  addToCart,
  removeFromCart,
  decreaseQuantity,
  cartItem,
  productData,
}) => {
  const token = localStorage.getItem("authToken");
  // console.log(`Home: token ${token}`);
  return (
    <>
      <Router>
        <Header renderedToken={token} cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={<Home productData={productData} cartItem={cartItem} />}
          />
          <Route
            path="products"
            element={<Products productData={productData} />}
          />
          <Route
            path="/products/:productId"
            element={
              <DisplayProduct
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
                productData={productData}
              />
            }
          />
          <Route
            path="/artworks"
            element={<ArtWork productData={productData} />}
          />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cartItem={cartItem} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/activated-account" element={<SuccessActivation />} />
          <Route
            path="/register-successful"
            element={<SuccessfulRegistration />}
          />
          <Route
            path="/activate/:activation_token"
            element={<AccountVerification />}
          />
          {/* <Route path=":activationId" ele/> */}
          <Route path="/dashboard" element={<Dashborad />} />
          <Route path="/admin/upload-products" element={<AdminUpload />} />
          <Route path="/upload-successful" element={<SucessfulUpload />} />
        </Routes>
        <Subscribe />
        <Footer />
      </Router>
    </>
  );
};

export default Main;
