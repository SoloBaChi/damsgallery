import React from "react";
import "../styles/SiteMetrics.css";

function SiteMetrics(props) {
  return (
    <section className="metrics-section">
      <figure className="grid-container-3 counter-container">
        <div className="grid-item">
          <h2>500+</h2>
          <h6>Artworks</h6>
        </div>
        <div className="grid-item">
          <h2>100+</h2>
          <h6>contemporary artists</h6>
        </div>
        <div className="grid-item">
          <h2>1 million+</h2>
          <h6>Rate & Review</h6>
        </div>
      </figure>
    </section>
  );
}

export default SiteMetrics;
