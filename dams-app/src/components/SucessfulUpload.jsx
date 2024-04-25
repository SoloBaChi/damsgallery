import React from "react";
import { Link } from "react-router-dom";

function SucessfulUpload(props) {
  return (
    <section className="successful-upload">
      <div className="upload-card">
        <h6>You upload was successful</h6>
        <h4>do you want to upload another file ?</h4>
        <div className="answers flex-container-2">
          <div className="flex-item">
            <Link className="cta-btn" to="/products">
              No
            </Link>
          </div>
          <div className="flex-item">
            <Link className="cta-btn yes" to="/admin/upload-products">
              Yes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SucessfulUpload;
