import React from "react";
// import "../styles/Subscribe.css";
function Subscribe(props) {
  return (
    <section className="subscribe-section">
      <div className="flex-container-2">
        <div className="flex-item">
          <h3>subscribe to our news letter</h3>
          <h6>Sign up today to get latest news in the art industry</h6>
        </div>
        <div className="flex-item">
          <form>
            <div className="form-field">
              <input type="email" placeholder="Enter Email Address" />
              <div className="cta-btn">
                <button>get listed</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
