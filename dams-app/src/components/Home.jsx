import React from "react";
import Header from "./Header";
import HeroContents from "./HeroContents";
import StartYourJourney from "./StartYourJourney";
import Products from "./Products";
import ConnectWithArtists from "./ConnectWithArtists";
import Footer from "./Footer";

function Home(props) {
  return (
    <>
     <Header/>
     <HeroContents/>
      <StartYourJourney />
      <Products />
      <ConnectWithArtists />
      <Footer />
    </>
  );
}

export default Home;
