import React from "react";
import "./ContactInfo.css";
import { SlLocationPin } from "react-icons/sl";
import { ImMobile } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <div className="container contactInfo">
      <div className="info">
        <h5>Contact Us</h5>
        <p>
          If you would like to know more about our policies, you can consult our
          Terms and Conditions. You will also be able to follow your order
          (tracking number will be provided in an e-mail after ordering). You
          wish to return some items? <span>Click here.</span>
        </p>
        <div className="info_boxes">
          <div className="info_box">
            <div className="info_box_icon">
              <SlLocationPin />
            </div>
            <div className="info_box_content">
              <h6>Address</h6>
              <p>
                Click the icon in the bottom right of the page to talk to our
                agents during business hours. At other times we will respond as
                soon as possible.
              </p>
            </div>
          </div>
          <div className="info_box">
            <div className="info_box_icon">
              <ImMobile />
            </div>
            <div className="info_box_content">
              <h6>Phone</h6>
              <p>+41 71 227 76 90</p>
            </div>
          </div>
          <div className="info_box">
            <div className="info_box_icon">
              <MdOutlineWatchLater />
            </div>
            <div className="info_box_content">
              <h6>Open Hours</h6>
              <p>
                Monday to Friday 09:30 - 17:30 <br />
                Saturday & Sunday 10:00 - 15:00
              </p>
            </div>
          </div>
          <div className="info_box">
            <div className="info_box_icon">
              <AiOutlineMail />
            </div>
            <div className="info_box_content">
              <h6>Email</h6>
              <p>help@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d106685.43251284992!2d-111.800538!3d33.320913!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1719815217104!5m2!1sen!2sus"></iframe>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
