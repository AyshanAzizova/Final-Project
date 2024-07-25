import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container cart-container">
      <div className="cart-items">
        <h2>Your cart</h2>
        <div className="cart-item">
          <img src="https://via.placeholder.com/50" alt="product" />
          <div className="item-details">
            <p>Raw Black T-Shirt Lineup</p>
            <p>Color: <span className="color-indicator green"></span> Size: M</p>
          </div>
          <div className="item-price">$75.00</div>
          <div className="item-quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="item-remove">×</button>
        </div>
        <div className="cart-item">
          <img src="https://via.placeholder.com/50" alt="product" />
          <div className="item-details">
            <p>Essential Neutrals</p>
            <p>Color: <span className="color-indicator blue"></span> Size: M</p>
          </div>
          <div className="item-price">$22.00</div>
          <div className="item-quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="item-remove">×</button>
        </div>
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
        <button className="checkout-button">Checkout</button>
      <Link to='/products'>  <button className="continue-shopping">Continue Shopping</button></Link>
      </div>
    </div>
  );
};

export default Cart;
