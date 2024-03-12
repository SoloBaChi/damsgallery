import React from "react";
import Products from "./Products";
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

const Main = (props) => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/artworks" element={<ArtWork />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Subscribe />
        <Footer />
      </Router>
    </>
  );
};

export default Main;
