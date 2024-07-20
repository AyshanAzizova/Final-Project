import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Categories.css'; // Xüsusi CSS faylınızı daxil edin
import categories1 from '../../../assets/images/categories1.webp';
import categories2 from '../../../assets/images/categories2.webp';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",justifyContent:"center",
        alignItems:"center"
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
      style={{ ...style, display: "flex",justifyContent:"center",
        alignItems:"center"
       }} // Oxların üslubları // Oxların üslubları
      onClick={onClick}
    />
  );
};

const AutoPlaySliderWithArrows = () => {
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
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  

  return (
    <div className="container_products categories">
      <Slider {...settings}>
      <div className='categories_item'>
      <div style={{display:"flex",justifyContent:"center"}}><img src={categories1} alt='categories1'/></div>
        <h4>Deal</h4>
      </div>
      <div className='categories_item'>
      <div style={{display:"flex",justifyContent:"center"}}><img src={categories2} alt='categories2'/></div>
        <h4>Trend</h4>
      </div>
        <div className='categories_item'>
        <div style={{display:"flex",justifyContent:"center"}}><img src={categories1} alt='categories1'/></div>
          <h4>Deal</h4>
        </div>
        <div className='categories_item'>
        <div style={{display:"flex",justifyContent:"center"}}><img src={categories2} alt='categories2'/></div>
          <h4>Trend</h4>
        </div>
        <div className='categories_item'>
        <div style={{display:"flex",justifyContent:"center"}}><img src={categories1} alt='categories1'/></div>
          <h4>Deal</h4>
        </div>
        <div className='categories_item'>
        <div style={{display:"flex",justifyContent:"center"}}><img src={categories2} alt='categories2'/></div>
          <h4>Trend</h4>
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlaySliderWithArrows;
