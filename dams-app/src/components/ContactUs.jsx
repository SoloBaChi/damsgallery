import React from "react";
// import "../styles/Contactus.css";
import { Link } from "react-router-dom";

function ContactUs(props) {
  return (
    <div className="contactus-section">
      <div className="contactus-hero-section">
        <h2>contact us</h2>
      </div>
      <section>
        <div className="contactus-form-container">
          <form className="contactus-section-form">
            <div className="form-field">
              <input type="text" placeholder="Full name" required />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="form-field">
              <textarea
                type="text"
                placeholder="Type message Here"
                cols="24"
                rows="8"
                required
              ></textarea>
            </div>
            <div className="cta-btn">
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
        <div className="social-media-contacts">
          <p>
            <Link to="tel:+2348033475335">+2348033475335</Link>
          </p>
          {/* <a href="tel:+2348033475335">2348033475335</a> */}
          <div className="icons">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="icon-container"
            >
              <img src={`/assets/facebook-logo.svg`} alt="facebook logo" />
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="icon-container"
            >
              <img src={`/assets/instagram-logo.svg`} alt="instagran logo" />
            </Link>
            <Link
              to="https://twitter.com/"
              target="_blank"
              className="icon-container"
            >
              <img src={`/assets/x-logo.svg`} alt="x logo" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
