import React from "react";
import { Link } from "react-router-dom";

function AccountActivation(props) {
  return (
    <section>
      <h3 style={{ color: "green" }}>
        Your account has been activated successfully{" "}
        <span style={{ fontSize: "45px" }}>&#128640;</span>
      </h3>
      <p>
        Please Login{" "}
        <Link className="cta-btn" to="/login">
          <button>login</button>
        </Link>
        to continue shopping
      </p>
    </section>
  );
}

export default AccountActivation;
