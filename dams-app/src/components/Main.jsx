import React from "react";
import Products from "./Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import ArtWork from "./ArtWork";
import Artists from "./Artists";
import Footer from "./Footer";

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
