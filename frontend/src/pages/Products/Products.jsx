import React from "react";
import "./Products.css";
import Categories from "../../components/Products/Categories/Categories";
import Product from "../../components/Products/Product/Product";
import Filter from "../../components/Products/Filter/Filter";

const Products = () => {
  return (
    <div className="productsBack">
      <div className="container products">
        <Categories />
        <Filter/>
        <Product/>
      </div>
    </div>
  );
};

export default Products;
