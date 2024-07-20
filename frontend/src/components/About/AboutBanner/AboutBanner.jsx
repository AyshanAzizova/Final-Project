import React from "react";
import "./AboutBanner.css";
import {Link} from 'react-router-dom'
import aboutBanner1 from "../../../assets/images/aboutBanner.jpg";
import aboutBanner2 from "../../../assets/images/aboutBanner2.jpg";
import aboutBanner3 from "../../../assets/images/aboutBanner3.jpg";

const AboutBanner = () => {
  return (
    <div className="container aboutBanner">
      <div className="aboutBanner_left">
        <div className="imageContainer">
          <img src={aboutBanner1} alt="about banner 1" />
        </div>
        <div className="imageContainer">
          <img src={aboutBanner2} alt="about banner 2" />
        </div>
        <div className="imageContainer">
          <img src={aboutBanner3} alt="about banner 3" />
        </div>
      </div>
      <div className="aboutBanner_right">
        <div className="aboutBanner_right_content">
          <h6>About Us</h6>
          <h2>The Best Skin Shine Is What We Provide For You</h2>
          <p>
            Et egestas quis ipsum suspendisse. Gravida neque convallis a cras
            semper. Faucibus in ornare quam viverra orci sagittis. Odio ut enim
            blandit volutpat maecenas volutpat. Volutpatate dignissim
            suspendisse in est ante in nibh mauris cursus.
          </p>
          <button><Link>SHOW MORE</Link></button>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
