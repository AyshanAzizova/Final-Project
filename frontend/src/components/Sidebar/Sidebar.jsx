import React, { useState } from "react";
import "./Sidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import product from "../../assets/images/product1.webp";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const initialItems = [
    { id: 1, name: "Superpose Lamp / Black", size: "M", qty: 3, price: 215.0 },
    { id: 2, name: "Superpose Lamp / Black", size: "M", qty: 3, price: 215.0 },
    { id: 3, name: "Superpose Lamp / Black", size: "M", qty: 3, price: 215.0 },
    { id: 4, name: "Superpose Lamp / Black", size: "M", qty: 3, price: 215.0 },
  ];

  const [items, setItems] = useState(initialItems);

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalAmount = items.reduce((total, item) => total + (item.price * item.qty), 0);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="close-icon" onClick={toggleSidebar}>
          <AiOutlineClose />
        </div>
        <h3>Shopping Cart</h3>
        <span>{items.length}</span>
      </div>
      <div className="sidebar_items">
        {items.map((item) => (
          <div className="sidebar-item" key={item.id}>
            <img src={product} alt="product" />
            <ul>
              <li>
                <Link>{item.name}</Link>
              </li>
              <li>Size: {item.size}</li>
              <li>QTY: {item.qty}</li>
              <li>${item.price.toFixed(2)}</li>
            </ul>
            <FaRegTrashAlt onClick={() => handleRemoveItem(item.id)} />
          </div>
        ))}
      </div>
      <div className="sidebar_bottom_top">
        <p>Total</p>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className="sidebar_bottom">
        <Link to='/cart'>VIEW CART</Link>
        <Link to='/checkout'>CHECK OUT</Link>
      </div>
    </div>
  );
};

export default Sidebar;
