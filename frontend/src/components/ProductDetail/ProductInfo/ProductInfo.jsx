
import React from 'react'
import './ProductInfo.css'
import { CiHeart } from "react-icons/ci";


const ProductInfo = () => {
  return (
    <div className='productInfo'>
      <h2>Superpose Lamp<button><CiHeart/></button></h2>
      <span><ins>$35.00 USD</ins> <del>$30.00 USD</del></span>
      <p>Being able to read a novel in another language and understand it is a huge achievement. You’ll feel accomplished the moment you read that final page, close the book, and reflect on the experience. You might find yourself at the last page faster than you thought—once you begin reading these...</p>
      <div className='size'>
        Size <button>M</button> <button>L</button>
      </div>
    </div>
  )
}

export default ProductInfo