import React from "react";
import "./Letter.css";
import { SiMinutemailer } from "react-icons/si";

const Letter = () => {
  return (
    <div className="letter_back">
      <div className="container letter">
        <div className="letter_left">
            <h3>GET UPDATE</h3>
            <p>Subscribe our newsletter and get <br/>
            discount 30% off</p>
        </div>
        <div className="letter_right">
          <input type="email" placeholder="Your email address..." />
          <button>
            <SiMinutemailer />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Letter;
