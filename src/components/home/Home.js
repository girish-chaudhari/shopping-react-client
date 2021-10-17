import React from "react";
import Carousel from "../content/Carousel";
// import NavBar from "../content/NavBar";
import MultyItemCarousel from "../content/MultyItenCarousel";
// import Footer from "../content/Footer";
import HomeProductCarousel from "../content/HomeProductCarouse";
import Newsletter from "../content/NewsLetter";
import Announcement from "../content/Announcement";

const Home = () => {
  return (
    <>
      <Announcement />
      <Carousel />
      <MultyItemCarousel />
      <HomeProductCarousel />
      <Newsletter />
    </>
  );
};

export default Home;
