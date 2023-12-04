import React from "react";
import Banner from "../../common/Banner";
import { Link } from "react-router-dom";
import Carousel from "../../common/Carousel";
import "./index.css";
import Services from "../Services";

const Home = () => {
  return (
    <>
      <Carousel />
      <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at 200$">
        <Link to="/rooms" className="banner-button">
          Our Rooms
        </Link>
      </Banner>
      <Services />
    </>
  );
};

export default Home;
