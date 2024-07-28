import React from 'react';
import './Checkout.css'; // Stil faylı üçün bağlantı

const Checkout = () => {
  return (
    <div className="checkout-container container">
      <div className="shipping-details">
        <h2>Shipping Address</h2>
        <form>
          <div className="form-group">
            <label>Street Address</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" />
          </div>
        </form>
      </div>

      <div className="order-summary">
        <h2>Your Order</h2>
        <ul>
          <li><span>Subtotal:</span> $75.00</li>
          <li><span>Shipping:</span> Free</li>
          <li><span>Tax:</span> $3.00</li>
          <li><span>Total:</span> $78.00</li>
        </ul>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
