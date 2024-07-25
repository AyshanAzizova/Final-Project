import './Home.css'
import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import Slider from "../../components/Home/Slider/Slider";
import Instagram from '../../components/Home/Instagram/Instagram';
import Letter from "../../components/Home/Letter/Letter";
import NewProducts from "../../components/Home/NewProducts/NewProducts";
import Product from '../../components/Products/Product/Product'
import {products} from '../../mocks/products'

const Home = () => {
  const productsToShow = products.slice(0, 8); // Yalnız ilk 8 məhsulu göstərin

  return (
    <>
      <Slider />
      <Banner />
      <h2 className='homeHeader'>Best Seller</h2> 
      <p style={{textAlign:"center",color:"#666666",fontWeight:"500",fontSize:"17px",marginTop:"20px"}}>Best Seller Product This Week!</p>
      <Product products={productsToShow}/>
      <Letter/>
      <NewProducts/>
      <Instagram/>
    </>
  );
};

export default Home;
