import React, { useState, useEffect } from 'react';
import './Admin.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders'); // Adjust the URL if necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin_content">
      <h2>Orders</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <table className="products_table">
          <thead>
            <tr>
              <th>#</th>
              <th>Order</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>
                    {order.orderItems.map(item => (
                      <div key={item.productId._id}>
                        {item.productId.title} - {item.quantity} x ${item.price.toFixed(2)}
                      </div>
                    ))}
                  </td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                  <td>{order.orderItems[0].status}</td> {/* Assuming status is the same for all items */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
