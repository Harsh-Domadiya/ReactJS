import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const imagestyles = {
  width: "318px",
  height: "220px",
  gap: "5px",
  alignItems: "center",
  borderRadius: "25px",
  marginBottom: "10px"
};

function PauseOnHover() {
  var set = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...set}>
        <div>
          <img style={imagestyles} src="https://www.v3events.in/images/event/events24.jpg" alt="" />
        </div>
        <div>
          <img style={imagestyles} src="https://www.v3events.in/images/event/events42.jpg" alt="" />
        </div>
        <div>
          <img style={imagestyles} src="https://www.v3events.in/images/event/events32.jpg" alt="" />
        </div>
        <div>
          <img style={imagestyles} src="https://www.v3events.in/images/gallery/pic11.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;