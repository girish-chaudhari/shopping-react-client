import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom/carousel.scss";
import { data, multiData } from "../../temp/carousel";
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

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 5,
  infinite: false,
  slidesToScroll: 1,
  //   centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        // slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  return (
    <div style={{ margin: "30px 0" }} className="carousel">
      <h2 style={{ padding: "10px 30px" }}>Best Offers</h2>
      <Slider {...carouselProperties}>
        {multiData.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item, itemKey }) => {
  return (
    <div style={{ textAlign: "center" }} key={itemKey}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRNDING TVs</p>
      <p style={{ fontSize: "16px", padding: "5px 0", color: "green" }}>
        From ₹ 7,000
      </p>
      <p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
        Up To ₹ 5,000 Off on HDFC
      </p>
    </div>
  );
};

export default MultiItemCarousel;
