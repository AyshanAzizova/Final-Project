import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.webp";
import footerLogo from "../../assets/images/Footer.png";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";






const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <div className="footer_item">
          <img src={logo} alt="logo"/>
          <p style={{paddingLeft:"14px"}}>Subscribe our newsletter and get <br/>
          discount 30% off</p>
          <div className="letter">
            <input/>
            <button><SiMinutemailer/></button>
          </div>
          <ul style={{marginLeft:"14px",gap:"20px",display:"flex"}}>
            <li><a><FaTwitter/></a></li>
            <li><a><FaDribbble/></a></li>
            <li><a><FaBehance/></a></li>
            <li><a><FaInstagram/></a></li>

          </ul>
        </div>
        <div className="footer_item">
          <ul>
            <h4>Customer Care</h4>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Terms & Conditions</a>
            </li>
            <li>
              <a>Products Return</a>
            </li>
            <li>
              <a>Wholesale Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer_item">
          <ul>
            <h4>Customer Care</h4>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Terms & Conditions</a>
            </li>
            <li>
              <a>Products Return</a>
            </li>
            <li>
              <a>Wholesale Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer_item">
          <ul>
            <h4>Customer Care</h4>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Terms & Conditions</a>
            </li>
            <li>
              <a>Products Return</a>
            </li>
            <li>
              <a>Wholesale Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{borderTop:"1px solid #ddd"}}>
        <div className="container footer_bottom">
          <p>© Copyright 2024 | Lipam By ShopiLaunch. Powered by Shopify.</p>
          <img src={footerLogo} alt="logoFooter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
