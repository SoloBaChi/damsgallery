import React, { useState } from "react";
import Menu from "./Menu";
import { FaUserAlt } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <nav>
      <section className="nav-section">
        <div className="flex-container-2">
          <div>
            <FiMenu className="nav-icon menu-icon" onClick={handleToggleMenu} />
          </div>
          <div className="logo-container">
            <h1 className="logo-text">
              <Link to="/">dams gallery</Link>
            </h1>
          </div>
          <div className="nav-icons">
            <CiSearch className="nav-icon search-icon" />
            <LiaShoppingCartSolid className="nav-icon cart-icon" />
            <FaUserAlt className="nav-icon user-icon" />
          </div>
          <div className={toggleMenu ? "menu open" : "menu"}>
            <Menu />
          </div>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
