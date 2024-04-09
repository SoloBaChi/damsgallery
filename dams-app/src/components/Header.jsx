import React from "react";
import NavBar from "./NavBar";
function Header({ renderedToken, cartItem }) {
  // console.log(`header ${renderedToken}`);
  return (
    <header>
      <NavBar token={renderedToken} cartItem={cartItem} />
    </header>
  );
}

export default Header;
