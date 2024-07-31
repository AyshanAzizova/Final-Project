import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { removeItem, setCart } from "../../slices/cart.slice";
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
        // Serverdən məlumat sil
        const response = await fetch(`/api/carts/remove/${itemId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to remove item");
        }

        // Local state-i yenilə
        dispatch(removeItem({ id: itemId }));
    } catch (error) {
        console.error("Error removing item:", error);
    }
};

  

  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.total || 0), 0);
  };

  return (
    <div className="container cart-container">
      <div className="cart-items">
        <h2>Your cart</h2>
        {cartItems.map((item) => (
          <div className="cart-item" key={item._id}>
            <Link><img src={item.productPic} alt={item.title} /></Link>
            <div className="item-details">
              <p>{item.title}</p>
              <p>
                Color: {item.color}
              </p>
              <p>
                Size: {item.size}
              </p>
            </div>
            <div className="item-price">${item.price}</div>
            <div className="item-quantity">
              <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => handleRemoveItem(item._id)} className="item-remove">×</button>
            </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>${calculateSubtotal()}</span>
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
          <span>${calculateSubtotal() + 3}</span> {/* Add shipping cost to subtotal */}
        </div>
        <Link to="/checkout">
          <button className="checkout-button">Checkout</button>
        </Link>
        <Link to="/products">
          <button className="continue-shopping">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;


