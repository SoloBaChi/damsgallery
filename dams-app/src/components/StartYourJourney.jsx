import React from "react";
import "../styles/StartYourJourney.css";

function StartYourJourney(props) {
  return (
    <section className="your-journey">
      <h6 className="section-title">Seamless Shopping Experience</h6>
      <h2>Start Your Artistic Journey Today</h2>
      <p>
        Whether you're a seasoned collector or a first-time buyer, Artistry
        Haven welcomes you to embark on a journey of discovery, connection, and
        self-expression. Explore our collection, connect with artists, and
        elevate your space with original artworks that ignite your imagination
        and stir your soul. Let art be your guide as you navigate the boundless
        possibilities of creative expression. Begin your artistic journey with
        Artistry Haven today.
      </p>
      <div className="flex-container-2">
        <figure className="flex-item">
          <div className="img-container">
            <img src={`/assets/sculpture1.svg`} alt="scuplture 1" />
          </div>
          <figcaption className="fig-caption">
            <h4>Discover Unique Creations</h4>
            <p>
              Explore diverse artistic wonders in carefully curated categories,
              spanning styles from abstract to figurative. With regular
              additions, our collection promises continuous discovery and
              excitement for art enthusiasts.
            </p>
          </figcaption>
        </figure>
        <figure className="flex-item">
          <div className="img-container">
            <img src={`/assets/sculpture2.svg`} alt="scuplture 2" />
          </div>
          <figcaption className="fig-caption">
            <h4>Elevate Your Space</h4>
            <p>
              Elevate any space with our diverse original artworks, ranging from
              statement pieces to subtle accents. Customization options ensure
              the perfect fit, inspiring guests and reflecting your style and
              soul.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default StartYourJourney;
