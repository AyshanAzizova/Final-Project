import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { setCart } from '../../slices/cart.slice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [userWish, setUserWish] = useState([])
    const [selectedColor,setSelectColor] = useState('')
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch();
    const handleAddToCart = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await fetch("/api/carts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId: product._id,
                    quantity: "1",
                    size: "669e32ec2d5d32e1a0c50af4", // Ensure you have a state for selected size
                    color: selectedColor?selectedColor:product.color, // Ensure you have a state for selected color
                    price: String(product.price),
                }),
            });
    
            if (!response.ok) {
                throw new Error("Failed to add product to cart");
            }
    
            const data = await response.json();
            dispatch(setCart(data.cartItems)); // Update the cart state in Redux
    
            // Optionally, redirect to ViewCart page
            // navigate('/view-cart'); // Use react-router-dom's navigate function if you want to redirect
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    useEffect(() => {
        const fetchWish = async () => {
            const response = await fetch(`/api/wishlist/wishlist/${user.userId}`)
            const data = await response.json()
            const isInWish = data.find((x) => x._id === id);
            if (isInWish) {
                setIsInWishlist(true)
            } else {
                setIsInWishlist(false)
            }
            setUserWish(data)
        }
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                const data = await response.json();
                setProduct(data);

                // Check if the product is in local storage wishlist
                // const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
                // setIsInWishlist(storedWishlist.some(item => item.productId === id));

                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };
        fetchWish()
        fetchProduct();
    }, [id]);
    console.log(userWish);
    const handleWishlistToggle = async () => {
        try {
            // const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            const productIndex = userWish.findIndex(item => item._id === id);

            if (productIndex > -1) {
                // Remove from wishlist
                // storedWishlist.splice(productIndex, 1);
                await fetch(`/api/wishlist/wishlist/remove/${user.userId}/${id}`, {
                    method: "DELETE"
                })
                setIsInWishlist(false)
            } else {
                // Add to wishlist
                // storedWishlist.push({ productId: id });

                await fetch(`/api/wishlist/wishlist/add/${user.userId}/${id}`, {
                    method: "POST"
                })
                setIsInWishlist(true)
            }

            // localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
            setIsInWishlist(!isInWishlist);
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
    <div className='Detail' style={{width:"76%",margin:"0 auto",display:"flex",justifyContent:"space-between"}}>
      <img style={{width:"40%"}} src={`http://localhost:7007/${product.productPic}`} alt={product.title} />
      <div className='productInfo'>
        <h1>{product.title}<button><CiHeart/></button></h1>
        <div className='heart-text' onClick={handleWishlistToggle}>
        {isInWishlist ? <FaHeart className='heart heart-active' /> : <FaRegHeart className='heart' />}
        <p className='our1'>{isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}</p>
    </div>
        <p>${product.price} USD</p>
        <p>SKU:{product.sku}</p>
        <p>{product.description}</p>
        <div className='size'>
          Size :{product.size}  
        </div>
        <select className='select' name="color" id="color" onChange={(event)=>setSelectColor(event.target.value)}>
        <option value="" selected disabled hidden>Select the color</option>  
        {product.stock && product.stock.map((item, index) => (
            <option key={index} value={item.color._id}>{item.color.name}</option>
        ))}
    </select>
        <div class="buy-buttons">
        <button class="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <button>Buy it now</button>
    </div>

      </div>
    </div>
  )
}

export default ProductDetail;
