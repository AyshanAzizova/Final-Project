import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { setCart } from "../../slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
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
        productPic:
          item.productId.productPic || "default_placeholder_image_url",
        quantity: item.quantity || 1,
        total: (item.price || 0) * (item.quantity || 1), // Initialize total
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
      setCartItems(data.cartItems); // Update local state
      dispatch(setCart(data.cartItems)); // Update Redux state
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch("/api/carts/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: itemId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }

      const data = await response.json();
      setCartItems(data.cartItems); // Update local state
      dispatch(setCart(data.cartItems)); // Update Redux state
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // const fetchCart = async () => {
  //     try {
  //         const response = await fetch("/api/carts");
  //         const data = await response.json();

  //         const items = (data.cartItems || []).map((item) => ({
  //             ...item,
  //             color: item.color ? item.color.name : 'N/A',
  //             size: item.size ? item.size.name : 'N/A',
  //             productPic: item.productId.productPic || 'default_placeholder_image_url',
  //             quantity: item.quantity || 1,
  //             total: (item.price || 0) * (item.quantity || 1) // Initialize total
  //         }));

  //         setCartItems(items);
  //         dispatch(setCart(items));
  //     } catch (error) {
  //         console.error("Failed to fetch cart:", error);
  //     }
  // };

  useEffect(() => {
    fetchCart();
  }, []);

  // const fetchCart = async () => {
  //     try {
  //         const response = await fetch("/api/carts");
  //         const data = await response.json();

  //         const items = (data.cartItems || []).map((item) => ({
  //             ...item,
  //             color: item.color ? item.color.name : 'N/A',
  //             size: item.size ? item.size.name : 'N/A',
  //             productPic: item.productId.productPic || 'default_placeholder_image_url',
  //             quantity: item.quantity || 1,
  //             total: (item.price || 0) * (item.quantity || 1) // Initialize total
  //         }));

  //         setCartItems(items);
  //         dispatch(setCart(items));
  //     } catch (error) {
  //         console.error("Failed to fetch cart:", error);
  //     }
  // };

  // useEffect(() => {
  //     fetchCart();
  // }, []);

  // const handleQuantityChange = (itemId, change) => {
  //     setCartItems((prevItems) => {
  //         const updatedItems = prevItems.map((item) => {
  //             if (item._id === itemId) {
  //                 const newQuantity = item.quantity + change;
  //                 return {
  //                     ...item,
  //                     quantity: newQuantity > 0 ? newQuantity : 1,
  //                     total: item.price * (newQuantity > 0 ? newQuantity : 1),
  //                 };
  //             }
  //             return item;
  //         });
  //         dispatch(setCart(updatedItems));
  //         return updatedItems;
  //     });
  // };

  // const handleRemoveItem = (itemId) => {
  //     setCartItems((prevItems) => {
  //         const updatedItems = prevItems.filter((item) => item._id !== itemId);
  //         dispatch(setCart(updatedItems));
  //         return updatedItems;
  //     });
  // };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.total || 0), 0);
  };
  return (
    <div className="container cart-container">
      <div className="cart-items">
        <h2>Your cart</h2>
        {cartItems.map((item) => (
          <div className="cart-item" key={item._id}>
            <img src={item.productPic} alt={item.name} />
            <div className="item-details">
              <p>{item.title}</p>
              <p>
                Color: <span className="color-indicator green"></span> Size: M
              </p>
            </div>
            <div className="item-price">${item.price}</div>
            <div className="item-quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="item-remove">×</button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$90.00</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="summary-item">
          <span>Tax</span>
          <span>$3.00</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>$100.00</span>
        </div>
        <Link to="/checkout">
          <button className="checkout-button">Checkout</button>
        </Link>
        <Link to="/products">
          {" "}
          <button className="continue-shopping">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
