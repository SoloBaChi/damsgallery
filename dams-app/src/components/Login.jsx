import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./shared/LoadingSpinner";
// import "../styles/Auth.css";
function Login(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // Set the  location and History state
  const navigate = useNavigate();

  ////////////////////
  ////User Token Details
  // For Login
  const saveToken = (token) => {
    localStorage.setItem("authToken", token);
    setToken(token);
  };

  // For Logout
  const removeToken = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  // Hadle user token
  const handleUserToken = (userObj) => {
    const token = userObj.data?.accessToken;
    saveToken(token);
  };

  // Handle error message
  const handleErrorMessage = (err) => {
    const error = err.message[0].msg || err.message;
    setErrorMessage(error);
  };

  // Handle password Change
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle Input change
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
      email: user.email,
      password: user.password,
    };

    // turn the loading spin
    setLoading(true);

    // send to backend
    try {
      const res = await fetch(`https://dams-gallery-api.vercel.app/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resBody = await res.json();
      handleErrorMessage(resBody);
      handleUserToken(resBody);

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
              <h2>login</h2>
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
                  navigate("/dashboard")
                ) : (
                  <span style={{ color: "red" }}>{errorMessage}</span>
                )}
              </div>
              <div className="cta-btn">
                <button>
                  {loading ? <LoadingSpinner className="spinner" /> : "Login"}
                </button>
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
