import React from "react";
import Products from "./Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const Main = (props) => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
