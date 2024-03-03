import React from "react";

import "../styles/HeroContents.css";

function HeroContents(props) {
  return (
    <section className="hero-section">
      <div className="flex-container-2">
        <div className="flex-item">
          <h5>Where Inspiration Meets Expression</h5>
          <div className="site-caption">
            <h2>contemporary art</h2>
            <h1>gallery</h1>
          </div>
          <p>
            At Dams Gallery, we believe that art is more than just a
            decoration—it's a reflection of the human experience, a medium for
            self-expression, and a bridge that connects us all. Our curated
            collection celebrates the diversity of contemporary art, showcasing
            the talent and creativity of artists from around the globe. Whether
            you're a seasoned collector or an art enthusiast exploring new
            horizons, we invite you to discover, connect, and elevate your space
            with our handpicked selection of original artworks.
          </p>
          <div className="cta-btns">
            <button>
              <a href="">art work</a>
            </button>
            <button>
              <a href="">artists</a>
            </button>
          </div>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img src={`/assets/art-work.svg`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContents;
