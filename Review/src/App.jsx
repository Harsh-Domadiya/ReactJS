import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  cssEase: "linear"
};


const slideStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "10px",
  margin: "10px",
  textAlign: "center",
  transition: "transform .3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)"
  }
};

const imageStyles = {
  width: "99%",
  // height: "auto",
  gap: "5px",
  height: "auto",
  alignItems: "center",
  borderRadius: "50px",
  marginBottom: "10px"
};

const titleStyles = {
  margin: 0,
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",

};

const textStyles = {
  margin: "10px 0",
  fontSize: "20px",
  textAlign: "center",
  color: "#555"
};

function AutoPlay() {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={slideStyles}>
          <img style={imageStyles} src="./Image/1.jpg" alt="" />
          <h1 style={titleStyles}>Luxury Wedding Planners</h1>
          <p style={textStyles}>
            V3Events & Wedding is one of the most preferred choices as luxury
            wedding planners in Delhi NCR ..
          </p>
          <div className="btn-holder">
            <button style={{ fontSize: '16px', margin: "0px" }}  >i more info</button>
          </div>
        </div>
        <div style={slideStyles}>
          <img style={imageStyles} src="./Image/4.jpg" alt="" />
          <h1 style={titleStyles}>Reality Show Performers</h1>
          <p style={textStyles}>
            V3Events & Entertainments is a multi-faceted company delivering
            services in the field..
          </p>
          <div className="btn-holder">
            <button style={{ fontSize: '16px', margin: "0px" }} >i more info</button>
          </div>

        </div >
        <div style={slideStyles}>
          <img style={imageStyles} src="./Image/2.jpg" alt="" />
          <h1 style={titleStyles}>Wedding Organizers</h1>
          <p style={textStyles}>
            As a prominent Wedding Organizers in Delhi, we think outside the
            box at V3 Events & Weddings ..
          </p>
          <div className="btn-holder">
            <button style={{ fontSize: '16px', margin: "0px" }} >i more info</button>
          </div>

        </div >
        <div style={slideStyles}>
          <img style={imageStyles} src="./Image/3.jpg" alt="" />
          <h1 style={titleStyles}>Celebrity Management</h1>
          <p style={textStyles}>
            V3Events & Entertainments is a multi-faceted company delivering
            services in the field..
          </p>
          <div className="btn-holder">
            <button style={{ fontSize: '16px', margin: "0px" }} >i more info</button>
          </div>

        </div >
      </Slider >
    </div >
  );
}

export default AutoPlay;