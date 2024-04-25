import React, { useState } from "react";
import Menu from "./Menu";
import { FaUserAlt } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
// import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar({ cartItem }) {
  // Get the Token from local storage
  const userToken = localStorage.getItem("authToken");

  const [toggleMenu, setToggleMenu] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [token, setToken] = useState(userToken);

  const handleShowUser = (e) => {
    setShowUser((prev) => !prev);
  };
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  // Handle Logout
  const removeToken = () => {
    localStorage.removeItem("authToken");
    setToken(null);
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
              {cartItem.length > 0 && (
                <span className="cart-count">{cartItem.length}</span>
              )}
            </Link>
            <div className={!token ? "icon user-icon" : "user-icon active"}>
              <FaUserAlt onClick={handleShowUser} className="nav-icon" />
              <div className="nested-icon">
                {showUser && (
                  <ul className="nested-icon-list" onClick={handleShowUser}>
                    <li>
                      <Link to="/register">signup </Link>
                    </li>
                    {token ? (
                      <li>
                        <Link to="/login" onClick={removeToken}>
                          logout
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/login">login</Link>
                      </li>
                    )}
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
