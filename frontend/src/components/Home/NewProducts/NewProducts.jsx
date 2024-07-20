import React from "react";
import "./NewProducts.css";
import newProduct1 from "../../../assets/images/newPeoduct1.webp";
import newProduct2 from "../../../assets/images/newProduct2.webp";
import { Link } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";

const NewProducts = () => {
  return (
    <div className="container newProducts">
      <h2>DEALS OF THE DAY</h2>
      <div className="newProducts_item">
        <div className="newProducts_item_top">
          <div className="newProducts_item_image">
            <img src={newProduct1} alt="newProduct" />
            <span>NEW</span>
          </div>
          <div className="newProducts_item_text">
            <h4>
              <Link>Wall Bracket</Link>
            </h4>
            <p>
              <s>$70.00</s> <span>$65.00</span>
            </p>
            <p>Being able to read a novel in another language and...</p>
            <div className="newProducts_buttons">
              <button>
                <LiaShoppingBagSolid />
                ADD TO CART
              </button>
              <button style={{position:"relative"}} className="wishButton">
                <IoMdHeartEmpty />
              </button>
              <button style={{position:"relative"}} className="quickviewButton">
                <IoSearchOutline />
              </button>
            </div>
          </div>
        </div>
        <div className="newProducts_item_bottom">
          <h3>
            <IoIosTimer />
            Hungry up!
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "700",
            }}
          >
            Offer End In:
            <ul>
              <li>90d</li>:<li>90h</li>:<li>90m</li>:<li>90s</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="newProducts_item">
        <div className="newProducts_item_top">
          <div className="newProducts_item_image">
            <img src={newProduct2} alt="newProduct" />
            <span>NEW</span>
          </div>
          <div className="newProducts_item_text">
            <h4>
              <Link>Wall Bracket</Link>
            </h4>
            <p>
              <s>$70.00</s> <span>$65.00</span>
            </p>
            <p>Being able to read a novel in another language and...</p>
            <div className="newProducts_buttons">
              <button>
                <LiaShoppingBagSolid />
                ADD TO CART
              </button>
              <button style={{position:"relative"}} className="wishButton">
                <IoMdHeartEmpty />
              </button>
              <button style={{position:"relative"}} className="quickviewButton">
                <IoSearchOutline />
              </button>
            </div>
          </div>
        </div>
        <div className="newProducts_item_bottom">
          <h3>
            <IoIosTimer />
            Hungry up!
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "700",
            }}
          >
            Offer End In:
            <ul>
              <li>90d</li>:<li>90h</li>:<li>90m</li>:<li>90s</li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default NewProducts;
