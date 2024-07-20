import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; // Xüsusi CSS faylınızı daxil edin
import categories1 from "../../../assets/images/home15.webp";
import categories2 from "../../../assets/images/home16.webp";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }} // Oxların üslubları
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} // Oxların üslubları // Oxların üslubları
      onClick={onClick}
    />
  );
};

const AutoPlaySliderWithArrows = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="carousel_item">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={categories1} alt="categories1" />
          </div>
          <div className="sliderText">
            <p>Interior Lights</p>
            <h2>Bedroom Lights</h2>
            <button>
              <a>SHOP NOW</a>
            </button>
          </div>
        </div>
        <div className="carousel_item">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={categories2} alt="categories2" />
          </div>
          <div className="sliderText">
            <p>Interior Lights</p>
            <h2>Modern Optical Lights</h2>
            <button>
              <a>SHOP NOW</a>
            </button>
          </div>{" "}
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlaySliderWithArrows;
