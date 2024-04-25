import React from "react";
// import Header from "./Header";
import HeroContents from "./HeroContents";
import StartYourJourney from "./StartYourJourney";
import Products from "./Products";
import ConnectWithArtists from "./ConnectWithArtists";
import Testimonials from "./Testimonials";
import SiteMetrics from "./SiteMetrics";
// import Footer from "./Footer";
// import "../styles/Home.css";

function Home({ productData }) {
  // Get token from the local storage
  return (
    <div className="home-page">
      {/* <Header /> */}
      <HeroContents />
      <SiteMetrics />
      <StartYourJourney />
      <div className="home-white-bg">
        <Products productData={productData} />
        <ConnectWithArtists />
        <Testimonials />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
