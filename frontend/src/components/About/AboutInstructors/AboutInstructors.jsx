import React from "react";
import "./AboutInstructors.css";
import { Link } from "react-router-dom";
import instructor1 from "../../../assets/images/instructor1.jpg";
import instructor2 from "../../../assets/images/instructor2.jpg";
import instructor3 from "../../../assets/images/instructor3.jpg";
import instructor4 from "../../../assets/images/instructor4.jpg";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const AboutInstructors = () => {
  return (
    <div className="aboutInstructors">
      <div className="instructors_heading">
        <h3>Behind The Brands</h3>
        <h4 style={{ fontStyle: "italic", fontWeight: "300" }}>
          We are a female-founded, 100%.
        </h4>
      </div>
      <div className="container-about instructors">
     
        <div className="instructors_item">
          <div className="instructor_overlay"></div>
          <ul className="instructors_icons">
            <li>
              <Link>
                <BsTwitterX />
              </Link>
            </li>
            <li>
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
          </ul>
          <img src={instructor2} />
        </div>
        <div className="instructors_item">
        <div className="instructor_overlay"></div>
        <ul className="instructors_icons">
          <li>
            <Link>
              <BsTwitterX />
            </Link>
          </li>
          <li>
            <Link>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link>
              <FaInstagram />
            </Link>
          </li>
        </ul>
        <img src={instructor3} />
      </div>
      <div className="instructors_item">
      <div className="instructor_overlay"></div>
      <ul className="instructors_icons">
        <li>
          <Link>
            <BsTwitterX />
          </Link>
        </li>
        <li>
          <Link>
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link>
            <FaInstagram />
          </Link>
        </li>
      </ul>
      <img src={instructor2} />
    </div>
      </div>
    </div>
  );
};

export default AboutInstructors;
