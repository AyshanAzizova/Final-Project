import React from "react";
import "./BlogLeft.css";
import blog11 from "../../../assets/images/blog11.webp";
import blogRight from "../../../assets/images/blogRight.webp";
import { Link } from "react-router-dom";

const BlogLeft = () => {
  return (
    <div className="blogLeft">
      <div className="blogLeft_item">
        <div className="blogLeft_item_picture">
          <img src={blog11} alt="blog1" />
        </div>
        <h4>NEWS</h4>
        <h3>
          Interesting Things You Didn't Know
        </h3>
        <p>
          I got my first premium designer bag when I was in middle school. It
          was something I wished for, pined for, dreamed for and worked hard
          for....
        </p>
        <span>
          <Link>Read more</Link>
        </span>
      </div>
      <div className="blogLeft_item">
        <div className="blogLeft_item_picture">
          <img src={blogRight} alt="blog1" />
        </div>
        <h4>NEWS</h4>
        <h3>
          Interesting Things You Didn't Know
        </h3>
        <p>
          I got my first premium designer bag when I was in middle school. It
          was something I wished for, pined for, dreamed for and worked hard
          for....
        </p>
        <span>
        <Link>Read more</Link>
        </span>
      </div>
      <div className="blogLeft_item">
        <div className="blogLeft_item_picture">
          <img src={blogRight} alt="blog1" />
        </div>
        <h4>NEWS</h4>
        <h3>
          Interesting Things You Didn't Know
        </h3>
        <p>
          I got my first premium designer bag when I was in middle school. It
          was something I wished for, pined for, dreamed for and worked hard
          for....
        </p>
        <span>
        <Link>Read more</Link>
        </span>
      </div>
      <div className="blogLeft_item">
        <div className="blogLeft_item_picture">
          <img src={blogRight} alt="blog1" />
        </div>
        <h4>NEWS</h4>
        <h3>
          Interesting Things You Didn't Know
        </h3>
        <p>
          I got my first premium designer bag when I was in middle school. It
          was something I wished for, pined for, dreamed for and worked hard
          for....
        </p>
        <span>
        <Link>Read more</Link>
        </span>
      </div>
    </div>
  );
};

export default BlogLeft;
