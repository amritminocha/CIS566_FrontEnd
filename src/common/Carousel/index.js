import React from "react";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <div className="carousel">
      <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
        <div>
          <img
            className="carousel-item-img"
            src="https://www.hotelmetdelhi.com/img/slideshow/banner1.jpg"
            alt="banner1"
          />
        </div>
        <div>
          <img
            className="carousel-item-img"
            src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
            alt="banner2"
          />
        </div>
        <div>
          <img
            className="carousel-item-img"
            src="https://www.berjayahotel.com/sites/default/files/colombo_30.jpg"
            alt="banner3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
