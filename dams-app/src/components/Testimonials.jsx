import React from "react";
import Card from "./shared/Card";
// import "../styles/Testimonials.css";

function Testimonials(props) {
  return (
    <section className="testimonial-section">
      <h6>testimonials</h6>
      <h2>What does our customer say?</h2>
      <h5>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
      </h5>
      <figure className="flex-container-2">
        <Card
          className="testimonial-card"
          imgSrc={`/assets/testimonial-1.svg`}
          title="irenae strong"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <Card
          className="testimonial-card"
          imgSrc={`/assets/testimonial-2.svg`}
          title="irenae strong"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
      </figure>
    </section>
  );
}

export default Testimonials;
