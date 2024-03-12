import React from "react";
import Card from "./shared/Card";
// import "../styles/Artists.css";

function ConnectWithArtists(props) {
  return (
    <section className="artists-section">
      <h2>connect with artist</h2>
      <h6 className="section-title">
        Dive deeper into the creative process by exploring artist profiles
      </h6>
      <div className="flex-container-4">
        <Card
          className="connect-card"
          imgSrc={`/assets/artist-1.svg`}
          title={`Painting 1`}
          text={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci laborum pariatur debitis molestias odio non deleniti corporis, distinctio fuga id sit nemo temporibus eum dolorem.`}
        />
        <Card
          className="connect-card"
          imgSrc={`/assets/artist-2.svg`}
          title={`Painting 1`}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci laborum pariatur debitis molestias odio non deleniti corporis, distinctio fuga id sit nemo temporibus eum dolorem.`}
        />
        <Card
          className="connect-card"
          imgSrc={`/assets/artist-3.svg`}
          title={`Painting 1`}
          text={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci laborum pariatur debitis molestias odio non deleniti corporis, distinctio fuga id sit nemo temporibus eum dolorem.`}
        />
        <Card
          className="connect-card"
          imgSrc={`/assets/artist-4.svg`}
          title={`Painting 1`}
          text={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci laborum pariatur debitis molestias odio non deleniti corporis, distinctio fuga id sit nemo temporibus eum dolorem.`}
        />
      </div>
    </section>
  );
}

export default ConnectWithArtists;
