import React from "react";
import "../styles/AboutUs.css";

function AboutUs(props) {
  return (
    <div className="aboutus-section">
      <section>
        <div className="flex-container-2">
          <div className="flex-item">
            <h2>about us</h2>
            <p>
              Welcome to Artistry Haven, your premier destination for
              discovering and acquiring original contemporary art.
            </p>
          </div>
          <div className="img-container">
            <img src={`/assets/aboutus-image-banner.svg`} alt="aboutus image" />
          </div>
        </div>
        <p>
          At Dams Gallery, we are passionate about connecting artists with art
          lovers, creating a vibrant community where creativity thrives and
          stories unfold. Founded on the belief that art is not just a visual
          experience but a profound journey of expression and connection, we
          strive to cultivate an environment where every artwork tells a story
          and every collector finds inspiration. Our journey began with a simple
          vision: to make art accessible to everyone, regardless of background
          or expertise. Guided by this vision, we have curated a diverse
          collection of original artworks, ranging from bold abstracts to serene
          landscapes, from thought-provoking figurative pieces to whimsical
          surrealism. Each artwork in our collection is handpicked for its
          unique voice, its ability to evoke emotion, and its power to ignite
          imagination.
        </p>
        <div className="image-container">
          <img src={`/assets/aboutus-banner.svg`} alt="aboutus banner" />
        </div>
        <p>
          What sets Dams Gallery apart is our unwavering commitment to both
          artists and collectors. We provide a platform for emerging and
          established artists alike to showcase their talent, share their
          stories, and connect with a global audience. Through our transparent
          and supportive approach, we empower artists to thrive and grow,
          ensuring that their voices are heard and their creations are
          celebrated. For collectors, Dams Gallery offers more than just a
          shopping experience—it's an invitation to embark on a journey of
          discovery, connection, and self-expression. Whether you're a seasoned
          collector seeking a new masterpiece or a first-time buyer exploring
          the world of art, our platform provides a seamless and inspiring way
          to explore, acquire, and engage with original artworks that resonate
          with your soul. But Dams Gallery is more than just a marketplace; it's
          a community—a gathering place for artists, collectors, and art
          enthusiasts to come together, share their passion, and inspire one
          another. We believe that art has the power to transcend boundaries,
          spark conversations, and unite us in our shared humanity. Through our
          platform, we aim to foster connections, nurture creativity, and create
          a world where art enriches lives and transforms spaces.
        </p>
      </section>
      <div className="image-overlay">
        <section>
          <h2>Thank you for joining us on this journey.</h2>
          <p>
            Together, let's celebrate the beauty of art, embrace the power of
            creativity, and build a haven where inspiration knows no bounds.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
