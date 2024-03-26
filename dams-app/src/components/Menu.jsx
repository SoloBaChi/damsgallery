import React from "react";
import { Link } from "react-router-dom";

function Menu({ removeToggle }) {
  // Get the token from the local
  return (
    <div className="navbar-menu">
      <ul className="menu-list">
        <li>
          <Link to="/" onClick={removeToggle}>
            home
          </Link>
        </li>
        <li>
          <Link to="/artworks" onClick={removeToggle}>
            art work
          </Link>
        </li>
        <li>
          <Link to="/artists" onClick={removeToggle}>
            artist
          </Link>
        </li>
        <li>
          <Link to="/aboutus" onClick={removeToggle}>
            about us
          </Link>
        </li>
        <li>
          <Link to="/contactus" onClick={removeToggle}>
            contact us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
