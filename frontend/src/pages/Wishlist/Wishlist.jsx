import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
    const items = [
        { name: 'Lamp Base', price: '$50.00', image: 'https://via.placeholder.com/100' },
        { name: 'Desk Chair', price: '$150.00', image: 'https://via.placeholder.com/100' },
        { name: 'Wooden Table', price: '$300.00', image: 'https://via.placeholder.com/100' }
    ];

    return (
        <div className="wishlist-container">
            <h1>Wishlist</h1>
            <ul className="wishlist-items">
                {items.map((item, index) => (
                    <li key={index} className="wishlist-item">
                        <img src={item.image} alt={item.name} className="wishlist-image" />
                        <div className="wishlist-details">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <div className="wishlist-buttons">
                                <button className="wishlist-remove">Remove</button>
                                <button className="wishlist-add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
