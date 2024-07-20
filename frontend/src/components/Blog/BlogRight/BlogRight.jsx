import React from "react";
import "./BlogRight.css";
import { FaSearch } from "react-icons/fa";
import blog11 from "../../../assets/images/blog11.webp";
import blogRight from '../../../assets/images/blogRight.webp'

const BlogRight = () => {
  return (
    <div className="blogRight">
      <div className="search">
        <input placeholder="Search..." />
        <button>
          <FaSearch />
        </button>
      </div>
      <div>
        <h2>RECENT POSTS</h2>
      </div>
      <div className="blogRight_items">
      <div className="blogRight_items_left">
      <img src={blogRight} alt="blogRight"/>
      </div>
      <div className="blogRight_items_right">
      <span>04.FEBRUARY.2024</span>
      <h3><a>Do You Really Understand Yourself?</a></h3>
      <span>0 Comments</span>
      </div>

      </div>
      <div className="blogRight_items">
      <div className="blogRight_items_left">
      <img src={blog11} alt="blogRight"/>
      </div>
      <div className="blogRight_items_right">
      <span>04.FEBRUARY.2024</span>
      <h3><a>Do You Really Understand Yourself?</a></h3>
      <span>0 Comments</span>
      </div>
      </div>
      <div className="blogRight_items">
      <div className="blogRight_items_left">
      <img src={blogRight} alt="blogRight"/>
      </div>
      <div className="blogRight_items_right">
      <span>04.FEBRUARY.2024</span>
      <h3><a>Do You Really Understand Yourself?</a></h3>
      <span>0 Comments</span>
      </div>
      </div>


    </div>
  );
};

export default BlogRight;
