import React, { useState } from "react";
import Menu from "./Menu";
import { FaUserAlt } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
// import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const handleShowUser = (e) => {
    // console.log("Yes");
    setShowUser((prev) => !prev);
  };
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <nav>
      <section className="nav-section">
        <div className="flex-container-2">
          <div className="toggle-icon">
            <FiMenu className="nav-icon menu-icon" onClick={handleToggleMenu} />
          </div>
          <div className="logo-container">
            <h1 className="logo-text">
              <Link to="/">dams gallery</Link>
            </h1>
          </div>
          <div className="nav-icons">
            <Link to="/search" className="icon search-icon">
              <CiSearch className="nav-icon " />
            </Link>
            <Link to="/cart" className="icon cart-icon">
              <LiaShoppingCartSolid className="nav-icon" />
            </Link>
            <div className="icon user-icon">
              <FaUserAlt onClick={handleShowUser} className="nav-icon" />
              <div className="nested-icon">
                {showUser && (
                  <ul className="nested-icon-list">
                    <li>
                      <Link to="/register">signup </Link>
                    </li>
                    <li>
                      <Link to="/login">login</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className={toggleMenu ? "menu open" : "menu"}>
            <Menu removeToggle={handleToggleMenu} />
          </div>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
