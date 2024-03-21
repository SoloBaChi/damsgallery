import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../styles/Auth.css";
import LoadingSpinner from "./shared/LoadingSpinner";

function Register(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle error message
  const handleErrorMessage = (err) => {
    const error = err.message[0].msg || err.message;
    setErrorMessage(error);
  };

  // Handle password Change
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Update the user details
  const handleChange = (event) => {
    setUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  // handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // update the user details
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    // turn the loading spin
    setLoading(true);

    // send to backend
    try {
      const res = await fetch(`https://dams-gallery-api.vercel.app/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resBody = await res.json();
      handleErrorMessage(resBody);

      console.log(resBody);
      setUser((prev) => {
        return {
          ...prev,
          ...resBody,
        };
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <section className="auth-section">
      <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
          <div className="flex-container-2">
            <div className="flex-item">
              <h2>register</h2>
              <div className="form-field">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="password">password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <h6 className="show-password" onClick={handleShowPassword}>
                  show
                </h6>
              </div>
              <div>
                {/* Return error message*/}
                {user.status === "success" ? (
                  navigate("/register-successful")
                ) : (
                  <span style={{ color: "red" }}>{errorMessage}</span>
                )}
              </div>
              <div className="cta-btn">
                <button>
                  {loading ? (
                    <LoadingSpinner className="spinner" />
                  ) : (
                    "Register"
                  )}
                </button>
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
