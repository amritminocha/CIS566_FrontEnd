import React from "react";
import Carousel from "../../common/Carousel";
import { Link } from "react-router-dom";
// import RoomsContainer from "../Components/RoomsContainer";
import Banner from "../../common/Banner";
import RoomList from "../RoomList";
const Rooms = () => {
  return (
    <div>
      <Carousel />
      <Banner title="Available Rooms" subtitle="Best in Class Room">
        <Link to="/" className="banner-button">
          RETURN HOME
        </Link>
      </Banner>
      <RoomList></RoomList>
      {/* <RoomsContainer /> */}
    </div>
  );
};

export default Rooms;
