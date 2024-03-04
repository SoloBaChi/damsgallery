import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import FooterCtaButton from "./FooterCtaButton";

function Footer(props) {
  return (
    <footer className="footer-container">
      <section>
        <nav className="footer-nav">
          <ul className="grid-3">
            <li className="grid-item">
              <Link to="/" className="company-name">
                adams gallery
              </Link>
              <form>
                <p>Contact us</p>
                <div className="form-field">
                  <input type="email" placeholder="Your Email" />
                  <div className="footer-arrow-container">
                    <FooterCtaButton />
                  </div>
                </div>
              </form>
            </li>
            <li className="grid-item">
              <Link to="/">home</Link>
              <ul>
                <li>
                  <Link to="/artworks">arts work</Link>
                </li>
                <li>
                  <Link to="/artists">artist</Link>
                </li>
                <li>
                  <Link to="/aboutus">about us</Link>
                </li>
                <li>
                  <Link to="/contactus">contact us</Link>
                </li>
              </ul>
            </li>
            <li className="grid-item">
              <Link to="/">social</Link>
              <ul>
                <li>
                  <Link to="/twitter">twitter</Link>
                </li>
                <li>
                  <Link to="/facebook">facebook</Link>
                </li>
                <li>
                  <Link to="/instagram">instagram</Link>
                </li>
                <li>
                  <Link to="/linkedIn">linkedIn</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="copywright-section">
          <small>Copyright Damsgallery 2024</small>
          <span>Designed by Hoppi Tech</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
