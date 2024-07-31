import React from "react";
import "./Banner.css";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.webp";
import banner3 from "../../../assets/images/banner3.webp";
import banner4 from "../../../assets/images/banner4.jpg";
import banner5 from "../../../assets/images/banner5.webp";
import { Link } from "react-router-dom";

const Banner = () => {

  
  return (
    <div className="container banner">
      <div className="banner_top">
        <div className="banner_item banner_1">
          <div className="bannerContent">
            <h3>Modern Lamps</h3>
            <Link to='/products'>Discover Now</Link>
          </div>
          <img src={banner1} alt="banner1" />
        </div>
        <div className="banner_item banner_2">
          <div className="bannerContent">
            <h3>Boho style</h3>
            <Link to='/products'>Discover Now</Link>
          </div>
          <img src={banner2} alt="banner2" />
        </div>
        <div className="banner_item banner_3">
          <div className="bannerContent">
            <h3>Reading</h3>
            <Link to='/products'>Discover Now</Link>
          </div>
          <img src={banner3} alt="banner3" />
        </div>
      </div>
      <div className="banner_bottom">
        <div className="banner_item banner_4">
          <div className="bannerContent">
            <h3>Decorative Lamps</h3>
            <Link to='/products'>Discover Now</Link>
          </div>
          <img src={banner4} alt="banner4" />
        </div>
        <div className="banner_item banner_5">
          <div className="bannerContent">
            <h3>Wall Lamps</h3>
            <Link to='/products'>Discover Now</Link>
          </div>
          <img src={banner5} alt="banner5" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
