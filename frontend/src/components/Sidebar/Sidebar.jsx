import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { setCart } from "../../slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import product from "../../assets/images/product1.webp";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await fetch("/api/carts");
      const data = await response.json();

      const items = (data.cartItems || []).map((item) => ({
        ...item,
        color: item.color ? item.color.name : "N/A",
        size: item.size ? item.size.name : "N/A",
        productPic: item.productId.productPic || "default_placeholder_image_url",
        quantity: item.quantity || 1,
        total: (item.price || 0) * (item.quantity || 1),
      }));

      setCartItems(items);
      dispatch(setCart(items));
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = async (itemId, change) => {
    try {
      const response = await fetch("/api/carts/quantity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: itemId,
          quantity: change,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update quantity");
      }

      const data = await response.json();
      setCartItems(data.cartItems);
      dispatch(setCart(data.cartItems));
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(`/api/carts/remove/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }

      const updatedCart = cartItems.filter(item => item._id !== itemId);
      setCartItems(updatedCart);
      dispatch(setCart(updatedCart));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.total || 0), 0);
  };

  const itemCount = cartItems.length;

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="close-icon" onClick={toggleSidebar}>
          <AiOutlineClose />
        </div>
        <h3>Shopping Cart</h3>
        <span>{itemCount} items</span>
      </div>
      <div className="sidebar_items">
        {cartItems.map((item) => (
          <div className="sidebar-item" key={item._id}>
            <img src={item.productPic} alt="product" />
            <ul>
              <li>
                <Link>{item.name}</Link>
              </li>
              <li>Size: {item.size}</li>
              <li>Color: {item.color}</li>
              <li>QTY: {item.quantity}</li>
              <li>${item.price.toFixed(2)}</li>
            </ul>
            <FaRegTrashAlt onClick={() => handleRemoveItem(item._id)} />
          </div>
        ))}
      </div>
      <div className="sidebar_bottom_top">
        <h4>Total Price</h4>
        <span>${calculateSubtotal().toFixed(2)}</span>
      </div>
      <div className="sidebar_bottom" style={{display:"flex"}}>
        <Link to='/cart'>VIEW CART</Link>
        <Link to='/checkout'>CHECK OUT</Link>
      </div>
    </div>
  );
};

export default Sidebar;
