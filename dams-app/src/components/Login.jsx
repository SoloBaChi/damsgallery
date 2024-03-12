import React from "react";
import { Link } from "react-router-dom";
// import "../styles/Auth.css";
function Login(props) {
  return (
    <section className="auth-section">
      <div className="auth-form-container">
        <form>
          <div className="flex-container-2">
            <div className="flex-item">
              <h2>login</h2>
              <div className="form-field">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" />
                <h6 className="show-password">show</h6>
              </div>
              <div className="cta-btn">
                <button>login</button>
              </div>
              <div className="new-user">
                <p>
                  Do not have an account <Link to="/register">register</Link>{" "}
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-container">
                <img src={`/assets/login-image.svg`} alt="login" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
