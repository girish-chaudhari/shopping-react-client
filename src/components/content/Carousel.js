import React from "react";
import "../custom/carousel.scss";
import Slider from "react-slick";
import { carousel as imageData } from "../../temp/carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="carousel">
      <Slider
        autoplay
        autoplaySpeed={2000}
        // dots
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={imageData[i]}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {imageData.map((item, i) => (
          <div key={i}>
            <img src={item} alt="" style={{ width: "100%", height: "40vh" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
