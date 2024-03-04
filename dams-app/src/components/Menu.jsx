import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="navbar-menu">
      <ul className="menu-list">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/artworks">art work</Link>
        </li>
        <li>
          <Link to="/artists">artist</Link>
        </li>
        <li>
          <Link to="/">about us</Link>
        </li>
        <li>
          <Link to="/">contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
