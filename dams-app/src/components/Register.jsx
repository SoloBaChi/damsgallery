import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/Auth.css";

function Register(props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <section className="auth-section">
      <div className="auth-form-container">
        <form>
          <div className="flex-container-2">
            <div className="flex-item">
              <h2>register</h2>
              <div className="form-field">
                <label htmlFor="name">name</label>
                <input type="text" name="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="password">password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                />
                <h6 className="show-password" onClick={handleShowPassword}>
                  show
                </h6>
              </div>
              <div className="cta-btn">
                <button>register</button>
              </div>
              <div className="existing-user">
                <p>
                  Already have an account <Link to="/login">login</Link>{" "}
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-container">
                <img src={`/assets/signup-image.svg`} alt="register" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
