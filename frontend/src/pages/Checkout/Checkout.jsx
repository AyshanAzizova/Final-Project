import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCart } from "../../slices/cart.slice.js";
import { LiaTrashAlt } from "react-icons/lia";

import "./Checkout.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartItemm = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const countryRef = useRef();
  const cityRef = useRef();
  const streetRef = useRef();
  const zipRef = useRef();

  const addOrderHandler = async () => {
    const streetAddress = streetRef.current?.value;
    const city = streetRef.current?.value;
    const country = streetRef.current?.value;
    const zipCode = streetRef.current?.value;

    const shippingAddress = {
      streetAddress,
      city,
      country,
      zipCode,
    };

    const orderItems = cartItems.map((item) => {
      console.log(item);
      return { ...item, color: item.color, size: item.size };
    });

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddress, orderItems, totalPrice: 10 }),
    });

    const data = await response.json();

    console.log(data);
  };
  console.log(cartItems);

  const fetchCart = async () => {
    try {
      const response = await fetch("/api/carts");
      const data = await response.json();

      const items = (data.cartItems || []).map((item) => ({
        ...item,
        color: item.color ? item.color._id : "N/A",
        size: item.size ? item.size._id : "N/A",
        productPic:
          item.productId.productPic || "default_placeholder_image_url",
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
  console.log(cartItems);



  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.total || 0), 0);
  };
  return (
    <div className="checkout-container container">
      <div className="shipping-details">
        <h2>Shipping Address</h2>
        <form>
          <div className="form-group">
            <label>Street Address</label>
            <input ref={streetRef} type="text" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input ref={cityRef} type="text" />
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <input ref={zipRef} type="text" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input ref={countryRef} type="text" />
          </div>
        </form>
      </div>

      <div className="order-summary">
  <h2>Your Order</h2>
  <ul>
    {cartItems.map((item) => (
      <li key={item._id}>
        <div style={{position:"relative"}}>
          <img src={item.productPic} alt={item.name} />
          <p className="count">{item.quantity}</p>
          <div>
            <span>{item.name}</span>
          </div>
        </div>
        <span>{item.total.toFixed(2)} USD</span>
      </li>
    ))}
    <li>
      <span>Total:</span> {calculateSubtotal().toFixed(2)} USD
    </li>
    <li>
      <span>Shipping:</span> Free
    </li>
    <li>
      <span>Tax:</span> $3.00
    </li>
    <li>
      <span>Subtotal:</span> {(calculateSubtotal() + 3).toFixed(2)} USD
    </li>
  </ul>
  <button onClick={addOrderHandler} className="place-order-btn">
    Place Order
  </button>
</div>

    </div>
  );
};

export default Checkout;
