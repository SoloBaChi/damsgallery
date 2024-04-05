import React from "react";
import NavBar from "./NavBar";
function Header({ renderedToken }) {
  // console.log(`header ${renderedToken}`);
  return (
    <header>
      <NavBar token={renderedToken} />
    </header>
  );
}

export default Header;
