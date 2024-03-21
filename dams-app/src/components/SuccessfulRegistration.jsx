import React from "react";
import { Link } from "react-router-dom";

function SuccessfulRegistration(props) {
  return (
    <section>
      <div className="message-modal">
        <div className="modal-container">
          <p>Your registration was successful &#128640;</p>
          <span>
            Please
            <span className="login_signup">
              <Link to="/login">login</Link>
            </span>
            to continue &#128072;
          </span>
        </div>
      </div>
    </section>
  );
}

export default SuccessfulRegistration;
