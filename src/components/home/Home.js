import React from "react";
import Carousel from "../content/Carousel";
// import NavBar from "../content/NavBar";
import MultyItemCarousel from "../content/MultyItenCarousel";
// import Footer from "../content/Footer";
import HomeProductCarousel from "../content/HomeProductCarouse";

const Home = () => {
  return (
    <>
      <Carousel />
      <MultyItemCarousel />
      <HomeProductCarousel />
    </>
  );
};

export default Home;
