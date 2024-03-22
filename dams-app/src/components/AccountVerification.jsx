import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "./shared/LoadingSpinner";

function AccountVerification(props) {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.activation_token);
  const tokenId = params.activation_token;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle error message
  const handleMessage = (msgObj) => {
    const msg = msgObj;
    setMessage(msg);
  };

  const handleAccountVerification = async () => {
    // turn the loading spin
    setLoading(true);

    // send to backend
    try {
      const res = await fetch(
        `https://dams-gallery-api.vercel.app/activate/${tokenId}`,
      );

      const resBody = await res.json();
      handleMessage(resBody);

      console.log(resBody);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <section>
      <button onClick={handleAccountVerification}>
        {loading ? <LoadingSpinner className="spinner" /> : "verify account"}
      </button>
      <div style={{ marginTop: "2rem" }}>
        {/* Return error message*/}
        {message.status === "success" ? (
          navigate("/activated-account")
        ) : (
          <span style={{ color: "red" }}>{message.message}</span>
        )}
      </div>
    </section>
  );
}

export default AccountVerification;
