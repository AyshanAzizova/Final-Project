import React, { useEffect, useState } from 'react';
import './Wishlist.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Wishlist = () => {
 const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user.userId) {
        navigate('/');
      }
      try {
        const response = await fetch(`/api/wishlist/wishlist/${user.userId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if(response.status!==404){
          setWishlist(data)
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
        setError('Failed to fetch wishlist. Please try again later.');
        setLoading(false);
      }
    };


    fetchWishlist();
  }, [user._id]);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await fetch(`/api/wishlist/wishlist/remove/${user.userId}/${productId}`, { method: 'DELETE' });
      setWishlist(wishlist.filter(item => item._id !== productId));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  const handleClearWishlist = async () => {
    try {
      await Promise.all(wishlist.map(item =>
        fetch(`/api/wishlist/wishlist/remove/${user.userId}/${item._id} `, { method: 'DELETE' })
      ));
      setWishlist([]);
    } catch (error) {
      console.error('Error clearing wishlist:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

    return (
        <div className="wishlist-container">
            <h1>Wishlist</h1>
            <ul className="wishlist-items">
                {wishlist.map((item) => (
                    <li key={item._id} className="wishlist-item">
                        <img src={`http://localhost:7007/${item.productPic}`} alt={item.name} className="wishlist-image" />
                        <div className="wishlist-details">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <p>{item.color}</p>
                            <p>{item.size}</p>
                            <div className="wishlist-buttons">
                            
                                <button onClick={()=>handleRemoveFromWishlist(item._id)} className="wishlist-remove">Remove</button>
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
