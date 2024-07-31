import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { setCart } from '../../slices/cart.slice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { addToCart } from '../../slices/cart.slice';


const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [userWish, setUserWish] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        try {
            const response = await fetch("/api/carts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId: product._id,
                    quantity: "1",
                    size: selectedSize, // Seçilmiş ölçü
                    color: selectedColor, // Seçilmiş rəng
                    price: String(product.price),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Failed to add product to cart:", errorData);
                throw new Error("Failed to add product to cart");
            }

            const data = await response.json();
            console.log(data);
            dispatch(setCart(data.cartItems)); // Update the cart state in Redux
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    useEffect(() => {
        const fetchWish = async () => {
            const response = await fetch(`/api/wishlist/wishlist/${user.userId}`)
            const data = await response.json();
            const isInWish = data.find((x) => x._id === id);
            setIsInWishlist(!!isInWish);
            setUserWish(data);
        };

        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                const data = await response.json();
                console.log('Fetched product data:', data); // Konsolda məhsul məlumatlarını yoxlayın

                setProduct(data);

                // Set default selected color and size
                if (data.stock.length > 0) {
                    setSelectedColor(data.stock[0].color._id);
                    setSelectedSize(data.stock[0].size._id);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchWish();
        fetchProduct();
    }, [id]);

  
  

    const handleWishlistToggle = async () => {
        try {
            const productIndex = userWish.findIndex(item => item._id === id);

            if (productIndex > -1) {
                // Remove from wishlist
                await fetch(`/api/wishlist/wishlist/remove/${user.userId}/${id}`, {
                    method: "DELETE"
                });
                setIsInWishlist(false);
            } else {
                // Add to wishlist
                await fetch(`/api/wishlist/wishlist/add/${user.userId}/${id}`, {
                    method: "POST"
                });
                setIsInWishlist(true);
            }
        } catch (error) {
            console.error('Error updating wishlist:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='Detail' style={{ width: "76%", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
            <img src={`http://localhost:7007/${product.productPic}`} alt={product.title} />
            <div className='productInfo'>
                <h1>{product.title}</h1>
                <div className='heart-text' onClick={handleWishlistToggle}>
                    {isInWishlist ? <FaHeart className='heart heart-active' /> : <FaRegHeart className='heart' />}
                    <p className='our1'>{isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}</p>
                </div>
                <p>${product.price} USD</p>
                <p>SKU: {product.sku}</p>
                <p>{product.description}</p>
                <div className='size'>
                    Size:
                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                        {product.stock.map((item, index) => (
                            <option key={index} value={item.size._id}>{item.size.name}</option>
                        ))}
                    </select>
                </div>
                <div className='color'>
                    Color:
                    <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                        {product.stock.map((item, index) => (
                            <option key={index} value={item.color._id}>{item.color.name}</option>
                        ))}
                    </select>
                </div>
                <div className="buy-buttons">
                    <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;
