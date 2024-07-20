import React from "react";
import "./Aboutİntroduce.css";
import about2 from "../../../assets/images/about2.jpg";
import about3 from "../../../assets/images/about3.webp";


const Aboutİntroduce = () => {
  return (
    <div className="aboutİntroduce container-about">
      <div className="aboutİntroduce_items">
        <div className="aboutIntroduce_content">
          <h3>Our Story</h3>
          <p>THE HIGH STRESS FAVOUTIRE</p>
          <div className="p_content">
            <p>
              Praesent metus tellus, elementum eu, semper a, adipiscing nec,
              purus. Vestibulum volutpat pretium libero. In ut quam vitae odio
              lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam.
              Aenean massa.
            </p>
            <p>
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Vivamus consectetuer hendrerit lacus. In hac habitasse platea
              dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
          </div>
        </div>
        <div className="aboutIntroduce_image">
          <img src={about2} alt="about2" />
        </div>
      </div>
      <div className="aboutİntroduce_items">
        <div className="aboutIntroduce_image">
          <img src={about3} alt="about2" />
        </div>
        <div className="aboutIntroduce_content">
          <h3>Who We Are ?</h3>
          <p>THE HIGH STRESS FAVOUTIRE</p>
          <div className="p_content">
            <p>
              Praesent metus tellus, elementum eu, semper a, adipiscing nec,
              purus. Vestibulum volutpat pretium libero. In ut quam vitae odio
              lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam.
              Aenean massa.
            </p>
            <p>
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              Vivamus consectetuer hendrerit lacus. In hac habitasse platea
              dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutİntroduce;
