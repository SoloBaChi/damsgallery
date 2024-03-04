import React from "react";
// import Header from "./Header";
import HeroContents from "./HeroContents";
import StartYourJourney from "./StartYourJourney";
import Products from "./Products";
import ConnectWithArtists from "./ConnectWithArtists";
// import Footer from "./Footer";
import "../styles/Home.css";

function Home(props) {
  return (
    <div className="home-page">
      {/* <Header /> */}
      <HeroContents />
      <StartYourJourney />
      <Products />
      <ConnectWithArtists />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
