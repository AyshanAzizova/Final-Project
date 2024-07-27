import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router'

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchProduct = async () => {
      try {
          const response = await fetch(`/api/products/${id}`);
          const data = await response.json();
          console.log(data);
          setProduct(data);
      } catch (error) {
          console.error('Error fetching product:', error);
      }
  };

  useEffect(() => {
      fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // You can replace this with a more styled loading component
  }

  return (
    <div className='Detail' style={{width:"76%",margin:"0 auto",display:"flex",justifyContent:"space-between"}}>
      <img style={{width:"40%"}} src={`http://localhost:7007/${product.productPic}`} alt={product.title} />
      <div className='productInfo'>
        <h2>{product.title}<button><CiHeart/></button></h2>
        <span><ins>$35.00 USD</ins> <del>$30.00 USD</del></span>
        <p>{product.description}</p>
        <div className='size'>
          Size <button>M</button> <button>L</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
