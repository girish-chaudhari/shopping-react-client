import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom/carousel.scss";
import { data, multiData } from "../../temp/carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MultiItemHomeCarousel = () => {
  return (
    <div style={{ margin: "30px 0" }} className="carousel">
      <h2 style={{ padding: "10px 30px" }}>Recomonded</h2>
      <Slider {...carouselProperties}>
        {data.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item, itemKey }) => {
  return (
    <Link to="/product">
      <div style={{ textAlign: "center" }} className="card" key={itemKey}>
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
    </Link>
  );
};

export default MultiItemHomeCarousel;
