import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import instagram1 from "../../../assets/images/instagram1.webp";
import instagram2 from "../../../assets/images/instagram2.webp";
import instagram3 from "../../../assets/images/instagram3.webp";
import instagram4 from "../../../assets/images/instagram4.webp";
import instagram5 from "../../../assets/images/instagram5.webp";
import "./Instagram.css";

const Instagram = () => {
  return (
    <div className="container instagram">
    <div className="instagram_content">
    <h3>LIPAM ON INSTAGRAM</h3>
    <p>#lipam</p>
    </div>
      <div className="instagram_items">
        <div className="instagram_item">
          <img src={instagram1} alt="instagram" />
          <div className="instagram_item_hover">
            <Link to="https://www.instagram.com/">
              <BsInstagram />
            </Link>
          </div>
        </div>
        <div className="instagram_item">
          <img src={instagram2} alt="instagram" />
          <div className="instagram_item_hover">
            <Link to="https://www.instagram.com/">
              <BsInstagram />
            </Link>
          </div>
        </div>
        <div className="instagram_item">
          <img src={instagram3} alt="instagram" />
          <div className="instagram_item_hover">
            <Link to="https://www.instagram.com/">
              <BsInstagram />
            </Link>
          </div>
        </div>
        <div className="instagram_item">
          <img src={instagram4} alt="instagram" />
          <div className="instagram_item_hover">
            <Link to="https://www.instagram.com/">
              <BsInstagram />
            </Link>
          </div>
        </div>
        <div className="instagram_item">
          <img src={instagram5} alt="instagram" />
          <div className="instagram_item_hover">
            <Link to="https://www.instagram.com/">
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
