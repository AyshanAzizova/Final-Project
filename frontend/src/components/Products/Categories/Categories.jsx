import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Categories.css";
import decorative from "../../../assets/images/decorative.jpeg";
import reading from "../../../assets/images/reading.jpeg";
import modern from "../../../assets/images/modern.jpeg";
import boho from "../../../assets/images/boho.jpg";
import wall from "../../../assets/images/wall.jpeg";
import classic from "../../../assets/images/classic.jpeg";
import crystal from "../../../assets/images/crystal.jpeg";

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
      }}
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
      }}
      onClick={onClick}
    />
  );
};

const AutoPlaySliderWithArrows = ({ onCategorySelect }) => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  const categories = [
    { id: "66a4e85e9dcd314c602490bb", name: "Boho", image: boho },
    { id: "66a4e9e49dcd314c602490c6", name: "Reading", image: reading },
    { id: "66a4e9c49dcd314c602490c1", name: "Decorative", image: decorative },
    { id: "66a4d8c59dcd314c6024908a", name: "Modern", image: modern },
    { id: "66a63646145a595d0eb78953", name: "Crystal", image: crystal },
    { id: "66a4dda99dcd314c6024908f", name: "Wall", image: wall },
    { id: "66a4d8b49dcd314c60249086", name: "Classic", image: classic },
  ];

  return (
    <div className="container_products categories">
      <Slider {...settings}>
        {categories.map((category) => (
          <div
            className="categories_item"
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={category.image} alt={category.name} />
            </div>
            <h4>{category.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlaySliderWithArrows;
