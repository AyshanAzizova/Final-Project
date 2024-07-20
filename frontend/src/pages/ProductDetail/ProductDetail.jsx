import React from 'react'
import ProductSlider from '../../components/ProductDetail/ProductSlider/ProductSlider'
import ProductInfo from '../../components/ProductDetail/ProductInfo/ProductInfo'

const ProductDetail = () => {
  return (
    <div className='Detail' style={{width:"76%",margin:"0 auto",display:"flex",justifyContent:"space-between"}}>
      <ProductSlider/>
      <ProductInfo/>
    </div>
  )
}

export default ProductDetail
